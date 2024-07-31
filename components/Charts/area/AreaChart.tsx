"use client";
import { AreaChart, BarChart, Card, DonutChart, Title } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

const Area = (props: { data: { [key: string]: string }[] }) => {
  const categories = Object.keys(props?.data?.at(0) ?? {}).filter(
    (e) => e !== "date",
  );

  return (
    <Card>
      <Title>Revenue </Title>

      <BarChart
        className="mt-6"
        // @ts-ignore

        data={props.data}
        index="date"
        categories={categories}
        colors={["indigo", "cyan", "purple", "pink", "yellow", "green", "red"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};
export default Area;
