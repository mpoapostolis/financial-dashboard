"use client";
import {
  TypeEmployee,
  addEmploye,
  editEmployee,
} from "@/app/server-actions/employees";
import { TypeVessel } from "@/app/server-actions/vessel";
import { Dialog, DialogPanel, Divider } from "@tremor/react";
import { Pencil } from "lucide-react";
import { useState } from "react";

export function EmployeeModalEdit(props: {
  employee: TypeEmployee;
  vessels: TypeVessel[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Pencil className="h-5 w-5" onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        className="z-50"
        static
        onClose={() => setOpen(false)}
        title="Add Vessel"
      >
        <DialogPanel className="max-w-2xl">
          <form
            onSubmit={(e) => {
              setOpen(false);
            }}
            action={editEmployee}
          >
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Edit Employee
                </label>
              </div>
              <Divider />

              <div className="mb-4.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Vessel <span className="text-meta-1">*</span>
                  </label>
                  <select
                    defaultValue={props.employee.group}
                    name="group"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  >
                    <option disabled value="0">
                      Select a vessel
                    </option>
                    {props.vessels.map((vessel) => (
                      <option key={vessel.id} value={vessel.id}>
                        {vessel.name}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="mb-2.5 block text-black dark:text-white">
                  Name <span className="text-meta-1">*</span>
                </label>
                <input
                  placeholder="Type the name of the employee here"
                  defaultValue={props.employee.name}
                  name="name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Job Title <span className="text-meta-1">*</span>
                </label>
                <input
                  placeholder="Type the job title of the employee here"
                  defaultValue={props.employee.job_title}
                  name="job_title"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <input type="hidden" name="id" value={props.employee.id} />
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Cost per trip <span className="text-meta-1">*</span>
                </label>
                <input
                  placeholder="Type the cost per trip of the employee here"
                  defaultValue={props.employee.cost_per_trip}
                  type="number"
                  min={0}
                  name="cost_per_trip"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex w-full justify-center rounded border border-white border-opacity-40 bg-transparent p-3 font-medium text-gray"
                >
                  cancel
                </button>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
