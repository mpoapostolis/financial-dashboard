import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { createEmployee } from "@/app/actions/employees";
import { EnchanedEmployee, KanbanBoard } from "@/components/kabanboard";
import { getPb } from "@/lib/pb";
import { Income } from "../income/page";

export interface Employee {
  id: string;
  name: string;
  salary: number;
  benefits: number;
}

export default async function Page() {
  const pb = getPb();

  const income = await pb.collection("income").getFullList<Income>({
    sort: "-created",
    expand: "employees",
  });
  const employees = await pb.collection("employees").getFullList<Employee>({}); // get all employees
  console.log(employees);
  const projectEmploye = new Set<string>();
  const assignedEmployees: EnchanedEmployee[] = income
    .filter((e) => e.expand?.employees)
    .map((inc) =>
      inc.expand?.employees.map((emp) => {
        projectEmploye.add(emp.id);
        return {
          ...emp,
          income: inc.name,
          incomeId: inc.id,
        };
      }),
    )
    .flat();
  const unassignedEmployees = employees
    .filter((e) => !projectEmploye.has(e.id))
    .map((e) => ({ ...e, income: "Unassigned", incomeId: "" }));
  const allMyEmployees = [...assignedEmployees, ...unassignedEmployees];
  return (
    <div className=" flex flex-col w-full px-4">
      <Dialog>
        <DialogTrigger className="ml-auto">
          <Button variant="outline">New Employee </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
          </DialogHeader>
          <form action={createEmployee} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            <div>
              <Label htmlFor="salary">Salary</Label>
              <Input id="salary" name="salary" type="number" />
            </div>

            <div>
              <Label htmlFor="benefits">Benefits</Label>
              <Input id="benefits" name="benefits" type="number" />
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit">Save</Button>
              </DialogClose>
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <KanbanBoard key={income.at(0)?.id} employees={allMyEmployees} />
    </div>
  );
}
