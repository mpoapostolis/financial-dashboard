"use client";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/ui/table";

export function TableE(props: { data: Array<any> }) {
  const keys = Object.keys(props.data?.at(0) || {});
  const data: Array<{
    workspace: string;
    owner: string;
    status: string;
    costs: string;
    region: string;
    capacity: string;
    lastEdited: string;
  }> = [
    {
      workspace: "sales_by_day_api",
      owner: "John Doe",
      status: "Live",
      costs: "$3,509.00",
      region: "US-West 1",
      capacity: "99%",
      lastEdited: "23/09/2023 13:00",
    },
    {
      workspace: "marketing_campaign",
      owner: "Jane Smith",
      status: "Live",
      costs: "$5,720.00",
      region: "US-East 2",
      capacity: "80%",
      lastEdited: "22/09/2023 10:45",
    },
    {
      workspace: "test_environment",
      owner: "David Clark",
      status: "Inactive",
      costs: "$800.00",
      region: "EU-Central 1",
      capacity: "40%",
      lastEdited: "25/09/2023 16:20",
    },
    {
      workspace: "sales_campaign",
      owner: "Jane Smith",
      status: "Live",
      costs: "$5,720.00",
      region: "US-East 2",
      capacity: "80%",
      lastEdited: "22/09/2023 10:45",
    },
    {
      workspace: "development_env",
      owner: "Mike Johnson",
      status: "Inactive",
      costs: "$4,200.00",
      region: "EU-West 1",
      capacity: "60%",
      lastEdited: "21/09/2023 14:30",
    },
    {
      workspace: "new_workspace_1",
      owner: "Alice Brown",
      status: "Inactive",
      costs: "$2,100.00",
      region: "US-West 2",
      capacity: "75%",
      lastEdited: "24/09/2023 09:15",
    },
  ];

  return (
    <>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              {keys.map((key) => (
                <TableHeaderCell key={key}>{key}</TableHeaderCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.data?.map((item) => (
              <TableRow key={item.id}>
                {keys?.map((key) => (
                  <TableCell key={key}>{item[key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </>
  );
}
