"use client";
import { BarChart, Card, Subtitle, Title } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    value: 2488,
  },
  {
    name: "Birds",
    value: 1445,
  },
  {
    name: "Crustaceans",
    value: 743,
  },
  {
    name: "Ferns",
    value: 281,
  },
  {
    name: "Arachnids",
    value: 251,
  },
  {
    name: "Corals",
    value: 232,
  },
  {
    name: "Algae",
    value: 98,
  },
];

const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const SimpleBar = (props: {
  data: {
    name: string;
    value: number;
  }[];
}) => (
  <Card>
    <Title>Vessel Books</Title>
    <BarChart
      className="mt-6"
      data={props.data}
      index="name"
      categories={["value"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={48}
    />
  </Card>
);

export default SimpleBar;
