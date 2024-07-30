import { getClientPb } from "@/app/libs/pb";
import { getPocketBaseServer } from "@/app/libs/pb-server";
import { TypeVessel, addVessel } from "@/app/server-actions/vessel";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TableE } from "@/components/Table";
import { VesselModal } from "@/components/VesselModal";
import { Button, Dialog, DialogPanel, Divider } from "@tremor/react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui";
import { TrashIcon } from "lucide-react";
import { TypeEmployee, deleteEmployee } from "@/app/server-actions/employees";
import { EmployeeModal } from "@/components/EmployeeModal";
import { EmployeeModalEdit } from "@/components/EmployeeModal/edit";

export default async function Page() {
  const pb = getPocketBaseServer();
  const employees = await pb.collection("employees").getFullList<TypeEmployee>({
    sort: "-created",
  });

  const vessels = await pb.collection("groups").getFullList<TypeVessel>({
    sort: "-created",
  });

  return (
    <div className="h-80 w-full">
      <Breadcrumb pageName="Employees" />

      <div className="flex">
        <div>
          <h3 className="text-gray-900 dark:text-gray-50 font-semibold">
            Employees
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm leading-6">
            Overview of all registered employees within your organization.
          </p>
        </div>
        <div className="ml-auto">
          <EmployeeModal vessels={vessels} />
        </div>
      </div>

      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Job Title</TableHeaderCell>
              <TableHeaderCell>Vessel</TableHeaderCell>
              <TableHeaderCell>Cost Per Trip</TableHeaderCell>
              <TableHeaderCell className="text-right">Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.job_title}</TableCell>
                <TableCell>
                  <Badge>
                    {vessels.find((v) => v.id === item.group)?.name}
                  </Badge>
                </TableCell>
                <TableCell>{item.cost_per_trip}€</TableCell>
                <TableCell className="flex items-center justify-end gap-4 text-right">
                  <EmployeeModalEdit
                    vessels={vessels}
                    employee={item}
                    key={item.id}
                  />
                  <form action={deleteEmployee}>
                    <input name="id" value={item.id} hidden />
                    <button type="submit">
                      <TrashIcon className="h-5 w-5 cursor-pointer text-red-300" />
                    </button>
                  </form>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  );
}
