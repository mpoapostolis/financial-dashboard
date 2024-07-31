"use client";
import {
  areIntervalsOverlapping,
  endOfMonth,
  format,
  startOfMonth,
  subDays,
} from "date-fns";

import {
  DateRangePicker,
  DateRangePickerValue,
  MultiSelect,
  MultiSelectItem,
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";

// function groupBy typescript
export function groupBy<T>(list: T[], keyGetter: (input: T) => string) {
  const map = new Map<string, T[]>();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

import { AreaChart, SimpleBar } from "@/components/Charts";
import DataCard from "@/components/Cards/DataCard";
import { useEmployees } from "@/hooks/useEmployees";
import { useVessels } from "@/hooks/useVessels";
import { useState } from "react";
import { useTransactions } from "@/hooks/useTransactions";

export function Dashboard() {
  const { data: employees } = useEmployees();
  const { data: vessels, isLoading } = useVessels();
  const { data: transactions } = useTransactions();
  const from = startOfMonth(new Date());
  const to = endOfMonth(new Date());
  const [vessel, setVessel] = useState<string | undefined>("all");
  const [dates, setDates] = useState<DateRangePickerValue>({
    from,
    to,
  });

  const filteredTransaction = transactions
    ?.filter((t) => {
      if (vessel !== "all") return t.group === vessel;
      return t;
    })
    ?.filter((c) => {
      if (dates.from && dates.to)
        return areIntervalsOverlapping(
          {
            start: new Date(c.bookingDate),
            end: new Date(c.bookingDate),
          },
          {
            start: dates.from,
            end: dates.to,
          },
        );
    })
    .map((t) => {
      const g = vessels?.find((v) => v.id === t.group);
      return {
        ...t,
        groupId: g?.id,
        revenue_per_book: g?.revenue_per_book ?? 0,
        groupName: g?.name,
      };
    });

  const totalRevenue = filteredTransaction?.reduce(
    (acc, curr) => acc + curr?.revenue_per_book ?? 0,
    0,
  );
  const allGroups = filteredTransaction?.map((t) => t.groupId);
  const totalExpenses1 = employees?.filter((e) => allGroups?.includes(e.group));

  const totalExpenses = totalExpenses1?.reduce(
    (acc, curr) => acc + curr.cost_per_trip,
    0,
  );

  const timeSeries = groupBy(
    filteredTransaction ?? [],
    (e) => `${e.bookingDate}`,
  );

  const yy = Array.from(timeSeries).map(([k, v]) => {
    // @ts-ignore
    const allKeys = groupBy(v, (v) => v.groupName);
    const value = Array.from(allKeys).reduce(
      (acc, [k, v]) => ({
        ...acc,
        [k]: v.reduce((acc, curr) => acc + curr.revenue_per_book, 0),
      }),
      {},
    );
    return {
      date: format(new Date(+k), "dd/MM/yyyy"),
      ...value,
    };
  });

  const xx = groupBy(
    filteredTransaction?.map((t) => ({
      name: t.groupName,
      value: t.revenue_per_book,
    })) ?? [],
    // @ts-ignore
    (i) => i?.name,
  );

  const arr = Array.from(xx).map(([k, v]) => ({
    name: k,
    value: v.reduce((acc, curr) => acc + curr.value, 0),
  }));

  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex  w-full flex-wrap justify-between gap-2">
          <Select
            //  @ts-ignore
            onChange={setVessel}
            value={vessel}
            className="w-full  md:w-fit"
          >
            <SelectItem value="all">All Vessels</SelectItem>
            {vessels?.map((vessel) => (
              <SelectItem key={vessel.id} value={vessel.id}>
                {vessel.name}
              </SelectItem>
            ))}
          </Select>
          <DateRangePicker
            enableClear
            value={dates}
            className="w-full md:w-fit"
            onSelect={(...args) => {
              const date = args?.at(1) as any;
              const { from, to } = dates;
              if (dates.to) {
                setDates({
                  from: date,
                  to: undefined,
                });
              } else {
                const [f, t] = [from, date].map((f) => f.getTime()).sort();
                setDates({
                  from: f,
                  to: t,
                });
              }
            }}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <DataCard showDollar name="Revenue" amount={totalRevenue ?? 0} />
          <DataCard
            name="Total bookings"
            amount={filteredTransaction?.length ?? 0}
          />
          <DataCard
            showDollar
            name="Employee costs"
            amount={totalExpenses ?? 0}
          />
        </div>
        <div className="space-y-5 py-5">
          {/*  @ts-ignore */}
          <AreaChart data={yy} />
          <SimpleBar data={arr} />
        </div>
      </div>
    </>
  );
}
