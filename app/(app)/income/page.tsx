import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PencilIcon, TrashIcon } from "lucide-react";
import { getPb } from "@/lib/pb";
import { createIncome, deleteIncome, editIncome } from "@/app/actions/income";
import { Employee } from "../employees/page";

export interface Income {
  id: string;
  name: string;
  revenuePerBook: number;
  employees?: string[];
  expand: {
    employees: Employee[];
  };
}

export default async function Page() {
  const pb = getPb();
  const income = await pb.collection("income").getFullList<Income>({
    sort: "-created",
    expand: "employees",
  });
  return (
    <div className="  w-full px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Resources Dashboard</h1>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Add Resource</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Resource</DialogTitle>
            </DialogHeader>
            <form action={createIncome} className="space-y-4">
              <div>
                <Label htmlFor="name">Resource Name</Label>
                <Input id="name" name="name" />
              </div>
              <div>
                <Label htmlFor="profitPerBook">Profit per Book</Label>
                <Input
                  id="profitPerBook"
                  name="profitPerBook"
                  type="number"
                  step="0.01"
                />
              </div>

              <DialogFooter className="mt-4 ">
                <DialogClose>
                  <Button type="submit">Save</Button>
                </DialogClose>
                <DialogClose>
                  <Button type="reset" variant="outline">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Resource Name</TableHead>
              <TableHead>Employees</TableHead>
              <TableHead>Profit per Book</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {income.map((resource) => (
              <TableRow key={resource.id}>
                <TableCell>{resource.name}</TableCell>
                <TableCell>
                  <Link className="text-blue-500" href={`/employees`}>
                    {resource.employees?.length || "add employees"}
                  </Link>
                </TableCell>
                <TableCell>${resource.revenuePerBook.toFixed(2)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <Dialog>
                      <DialogTrigger>
                        <PencilIcon className="w-4 h-4 " />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Add New Resource</DialogTitle>
                        </DialogHeader>
                        <form action={editIncome} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Resource Name</Label>
                            <Input
                              defaultValue={resource.name}
                              id="name"
                              name="name"
                            />
                          </div>
                          <input type="hidden" name="id" value={resource.id} />
                          <div>
                            <Label htmlFor="revenuePerBook">
                              Revenue per Book
                            </Label>
                            <Input
                              defaultValue={resource.revenuePerBook}
                              id="revenuePerBook"
                              name="revenuePerBook"
                              type="number"
                              step="0.01"
                            />
                          </div>

                          <DialogFooter className="mt-4 ">
                            <DialogClose>
                              <Button type="submit">Save</Button>
                            </DialogClose>
                            <DialogClose>
                              <Button type="reset" variant="outline">
                                Cancel
                              </Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <Dialog>
                      <DialogTrigger>
                        <TrashIcon className="w-4 h-4 text-red-500" />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Delete Resource</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p>
                            Are you sure you want to delete the {resource.name}
                            resource? This action cannot be undone.
                          </p>
                        </div>
                        <DialogFooter>
                          <DialogClose>
                            <form action={deleteIncome}>
                              <input
                                type="hidden"
                                name="id"
                                value={resource.id}
                              />
                              <Button variant="destructive">Delete</Button>
                            </form>
                          </DialogClose>
                          <div>
                            <DialogClose>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
