import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import {
  type ColDef,
  type GetRowIdFunc,
  type GetRowIdParams,
  type ValueFormatterFunc,
  type ValueGetterParams,
} from "@ag-grid-community/core";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridReact } from "@ag-grid-community/react";
import { AdvancedFilterModule } from "@ag-grid-enterprise/advanced-filter";
import { GridChartsModule } from "@ag-grid-enterprise/charts-enterprise";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { SparklinesModule } from "@ag-grid-enterprise/sparklines";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { TickerCellRenderer } from "../cell-renderers/TickerCellRenderer";
import { getData } from "../data-finance";

interface Props {
  gridTheme?: string;
  isDarkMode?: boolean;
}

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  AdvancedFilterModule,
  ColumnsToolPanelModule,
  ExcelExportModule,
  FiltersToolPanelModule,
  GridChartsModule,
  MenuModule,
  RangeSelectionModule,
  RowGroupingModule,
  SetFilterModule,
  RichSelectModule,
  StatusBarModule,
  SparklinesModule,
]);

const numberFormatter: ValueFormatterFunc = ({ value }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
  return value == null ? "" : formatter.format(value);
};

export const Vessels: React.FC<Props> = ({
  gridTheme = "ag-theme-quartz",
  isDarkMode = false,
}) => {
  const [rowData, setRowData] = useState(getData());
  const gridRef = useRef<AgGridReact>(null);

  const colDefs = useMemo<ColDef[]>(
    () => [
      {
        field: "instrument",
        cellDataType: "text",
        type: "rightAligned",
        maxWidth: 180,
      },
      {
        headerName: "P&L",
        cellDataType: "number",
        type: "rightAligned",
        cellRenderer: "agAnimateShowChangeCellRenderer",
        valueGetter: ({ data }: ValueGetterParams) =>
          data && data.quantity * (data.price / data.purchasePrice),
        valueFormatter: numberFormatter,
        aggFunc: "sum",
      },
      {
        headerName: "Total Value",
        type: "rightAligned",
        cellDataType: "number",
        valueGetter: ({ data }: ValueGetterParams) =>
          data && data.quantity * data.price,
        cellRenderer: "agAnimateShowChangeCellRenderer",
        valueFormatter: numberFormatter,
        aggFunc: "sum",
      },
      {
        field: "quantity",
        cellDataType: "number",
        type: "rightAligned",
        valueFormatter: numberFormatter,
        maxWidth: 150,
      },
      {
        headerName: "Price",
        field: "purchasePrice",
        cellDataType: "number",
        type: "rightAligned",
        valueFormatter: numberFormatter,
        maxWidth: 150,
      },
      {
        field: "purchaseDate",
        cellDataType: "dateString",
        type: "rightAligned",
        hide: true,
      },
    ],
    [],
  );

  const defaultColDef: ColDef = useMemo(
    () => ({
      flex: 1,
      filter: true,
      enableRowGroup: true,
      enableValue: true,
    }),
    [],
  );

  const getRowId = useCallback<GetRowIdFunc>(
    ({ data: { ticker } }: GetRowIdParams) => ticker,
    [],
  );

  const statusBar = useMemo(
    () => ({
      statusPanels: [
        { statusPanel: "agTotalAndFilteredRowCountComponent" },
        { statusPanel: "agTotalRowCountComponent" },
        { statusPanel: "agFilteredRowCountComponent" },
        { statusPanel: "agSelectedRowCountComponent" },
        { statusPanel: "agAggregationComponent" },
      ],
    }),
    [],
  );

  const themeClass = `${gridTheme}${isDarkMode ? "-dark" : ""}`;

  return (
    <div className={"wrapper grid h-[80vh]"}>
      <div className={"container grid"}>
        <div className={`${themeClass} grid`}>
          <AgGridReact
            ref={gridRef}
            getRowId={getRowId}
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            enableRangeSelection
            suppressAggFuncInHeader
            statusBar={statusBar}
          />
        </div>
      </div>
    </div>
  );
};
