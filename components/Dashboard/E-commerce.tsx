"use client";
import React from "react";

import {
  DateRangePicker,
  MultiSelect,
  MultiSelectItem,
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";

import { AreaChart, SimpleBar } from "@/components/Charts";
import ChatCard from "../Chat/ChatCard";

// without this the component renders on server and throws an error
import dynamic from "next/dynamic";
import DataCard from "../Cards/DataCard";
const MapOne = dynamic(() => import("../Maps/MapOne"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <DataCard name="sales" amount={12699} />
        <DataCard name="orders" amount={34600} />
        <DataCard name="customers" amount={400} />D
      </div>
      <div className="space-y-5 py-5">
        <AreaChart />
        <SimpleBar />
      </div>
    </div>
  );
};

export default ECommerce;
