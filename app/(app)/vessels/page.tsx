import { getClientPb } from "@/app/libs/pb";
import { getPocketBaseServer } from "@/app/libs/pb-server";
import {
  TypeVessel,
  addVessel,
  deleteVessel,
} from "@/app/server-actions/vessel";
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
import { Pencil, TrashIcon } from "lucide-react";
import { TypeEmployee } from "@/app/server-actions/employees";
const CONSTANT = 5;
export default async function Page() {
  const pb = getPocketBaseServer();
  const vessels = await pb.collection("groups").getFullList<TypeVessel>({
    sort: "-created",
  });

  const employees = await pb.collection("employees").getFullList<TypeEmployee>({
    sort: "-created",
  });

  return (
    <div className="h-80  w-full">
      <Breadcrumb pageName="Vessels" />

      <div className="flex">
        <div>
          <h3 className="text-gray-900 dark:text-gray-50 font-semibold">
            Vessels
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm leading-6">
            Overview of all registered vessels within your organization.
          </p>
        </div>
        <div className="ml-auto">
          <VesselModal />
        </div>
      </div>
      <TableRoot className="mt-8">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Revenue per book</TableHeaderCell>
              <TableHeaderCell>Maintance Cost</TableHeaderCell>
              <TableHeaderCell>Members</TableHeaderCell>
              <TableHeaderCell className="text-right">Actions</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vessels?.map((item) => {
              const emplo = employees.filter((e) => e.group === item.id);
              const empl = emplo?.length;

              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.revenue_per_book}€ </TableCell>

                  <TableCell>
                    {emplo.reduce((acc, curr) => {
                      return acc + curr.cost_per_trip;
                    }, 0)}
                    €
                  </TableCell>
                  <TableCell>
                    {employees
                      .slice(0, CONSTANT)
                      .filter((e) => e.group === item.id)
                      ?.map((e) => {
                        return (
                          <Badge key={e.id} variant="default" className="mr-2">
                            {e.name}
                          </Badge>
                        );
                      })}
                    {empl > CONSTANT && (
                      <Badge variant="default" className="mr-2">
                        +{empl - CONSTANT}
                      </Badge>
                    )}
                  </TableCell>

                  <TableCell className="flex items-center justify-end gap-4 text-right">
                    <form action={deleteVessel}>
                      <input name="id" value={item.id} hidden />
                      <button type="submit">
                        <TrashIcon className="h-5 w-5 cursor-pointer text-red-300" />
                      </button>
                    </form>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableRoot>
    </div>
  );
}
