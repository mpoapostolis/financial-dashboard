"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Employees } from "@/components/Tables/Employees";
import { Vessels } from "@/components/Tables/Vesseles";

const TablesPage = () => {
  return (
    <div className="h-80  w-full">
      <Breadcrumb pageName="Vessels" />
      <Vessels isDarkMode />
    </div>
  );
};

export default TablesPage;
