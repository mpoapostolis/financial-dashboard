"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Employees } from "@/components/Tables/Employees";

const TablesPage = () => {
  return (
    <div className="h-80  w-full">
      <Breadcrumb pageName="Employees" />
      <Employees />
    </div>
  );
};

export default TablesPage;
