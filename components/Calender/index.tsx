"use client";
import { useState } from "react";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import {
  endOfMonth,
  format,
  startOfMonth,
  getDay,
  eachDayOfInterval,
} from "date-fns";
import { useTransactions } from "../../hooks/useTransactions";
import { BadgeDelta, Select, SelectItem } from "@tremor/react";
import { TransactionModal } from "../TransactionModal";
import { Badge } from "../ui";
import { TypeTransaction } from "@/app/server-actions/bookings";

const Calendar = (props: { transactions: TypeTransaction[] }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const year = new Date().getFullYear();
  const start = startOfMonth(new Date(year, selectedMonth, 1));
  const end = endOfMonth(new Date(year, selectedMonth, 1));
  // Generate an array of all days in the month
  const daysInMonth = eachDayOfInterval({ start, end });

  // Create an array to represent the calendar grid with empty slots for days before the first day of the month
  const calendarGrid = [...Array(getDay(start)).fill(null), ...daysInMonth];

  return (
    <>
      <Breadcrumb
        pageName={
          "Bookings " + format(new Date(year, selectedMonth, 1), "MMMM")
        }
      />
      <div className="mb-4 flex w-full justify-end">
        <Select
          //  @ts-ignore
          onChange={(e) => setSelectedMonth(+e)}
          value={selectedMonth.toString()}
          className="w-full md:w-fit"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => (
            <SelectItem key={m} value={m.toString()}>
              {format(new Date(year, m, 1), "MMMM")}
            </SelectItem>
          ))}
        </Select>
      </div>

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day, index) => (
                <th
                  key={index}
                  className={`flex h-15 items-center justify-center ${index === 0 ? "rounded-tl-sm" : ""} ${index === 6 ? "rounded-tr-sm" : ""} p-1 text-xs font-semibold sm:text-base xl:p-5`}
                >
                  <span className="hidden lg:block"> {day} </span>
                  <span className="block lg:hidden"> {day.slice(0, 3)} </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array(Math.ceil(calendarGrid.length / 7))
              .fill(null)
              .map((_, weekIndex) => (
                <tr key={weekIndex} className="grid grid-cols-7">
                  {calendarGrid
                    .slice(weekIndex * 7, weekIndex * 7 + 7)
                    .map((day, dayIndex) => {
                      const currentTime = new Date(day).getTime();
                      const bookings =
                        props.transactions?.filter(
                          (t) => t.bookingDate === currentTime,
                        ).length ?? 0;
                      return (
                        <td
                          key={dayIndex}
                          className="ease relative grid h-2 cursor-pointer place-items-center border border-stroke text-black transition duration-500 hover:bg-gray dark:border-strokedark dark:text-white dark:hover:bg-meta-4 md:h-25 xl:h-31"
                        >
                          <TransactionModal
                            transactions={props.transactions}
                            key={day}
                            date={day}
                          >
                            <div className="grid  place-items-center gap-4">
                              <div className="col-span-2">
                                {day ? format(day, "d") : null}
                              </div>
                              {bookings > 0 && (
                                <Badge className="col-span-2 h-fit w-fit ">
                                  {
                                    props.transactions?.filter(
                                      (t) => t.bookingDate === currentTime,
                                    ).length
                                  }
                                  <div> bookings </div>
                                </Badge>
                              )}
                            </div>
                          </TransactionModal>
                        </td>
                      );
                    })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </>
  );
};

export default Calendar;
