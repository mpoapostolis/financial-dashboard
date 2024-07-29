import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import type {
  ColDef,
  GetDataPath,
  ValueFormatterFunc,
  ValueFormatterParams,
} from "@ag-grid-community/core";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import {
  type FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import { ContactCellRenderer } from "../cell-renderers/ContactCellRenderer";
import { EmployeeCellRenderer } from "../cell-renderers/EmployeeCellRenderer";
import { FlagCellRenderer } from "../cell-renderers/FlagCellRenderer";
import { StatusCellRenderer } from "../cell-renderers/StatusCellRenderer";
import { TagCellRenderer } from "../cell-renderers/TagCellRenderer";
import { getData } from "../data";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  RowGroupingModule,
  RichSelectModule,
  SetFilterModule,
  StatusBarModule,
]);

interface Props {
  gridTheme?: string;
  isDarkMode?: boolean;
}

const employmentType = ["Permanent", "Contract"];
const paymentMethod = ["Cash", "Check", "Bank Transfer"];
const paymentStatus = ["Paid", "Pending"];
const departments = {
  executiveManagement: "Executive Management",
  legal: "Legal",
  design: "Design",
  engineering: "Engineering",
  product: "Product",
  customerSupport: "Customer Support",
};
const departmentFormatter: ValueFormatterFunc = ({ value }) =>
  departments[value as keyof typeof departments] ?? "";

export const Employees: FunctionComponent<Props> = ({
  gridTheme = "ag-theme-quartz",
  isDarkMode,
}) => {
  const gridRef = useRef<AgGridReact>(null);

  const [colDefs] = useState<ColDef[]>([
    {
      headerName: "ID",
      field: "employeeId",
      width: 120,
    },
    {
      field: "department",
      width: 250,
      minWidth: 250,
      flex: 1,
      valueFormatter: departmentFormatter,
    },
    {
      field: "location",
      width: 200,
      minWidth: 200,
      flex: 1,
      editable: true,
    },
    {
      field: "joinDate",
      editable: true,
      width: 120,
    },
    {
      headerName: "Salary",
      field: "basicMonthlySalary",
      valueFormatter: ({ value }: ValueFormatterParams) =>
        value == null ? "" : `$${Math.round(value).toLocaleString()}`,
    },
  ]);

  const [rowData] = useState(getData());
  const getDataPath = useCallback<GetDataPath>((data) => data.orgHierarchy, []);
  const themeClass = isDarkMode ? `${gridTheme}-dark` : gridTheme;
  const autoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      headerName: "Employee",
      width: 330,
      pinned: "left",
      sort: "asc",
      cellRenderer: "agGroupCellRenderer",
      cellRendererParams: {
        suppressCount: true,
        innerRenderer: EmployeeCellRenderer,
      },
    };
  }, []);

  return (
    <div className={"wrapper grid h-[80vh]"}>
      <div className={"container grid"}>
        <div className={`${themeClass} grid`}>
          <AgGridReact
            className="h-full"
            ref={gridRef}
            columnDefs={colDefs}
            rowData={rowData}
            getDataPath={getDataPath}
            treeData
            autoGroupColumnDef={autoGroupColumnDef}
          />
        </div>
      </div>
    </div>
  );
};
