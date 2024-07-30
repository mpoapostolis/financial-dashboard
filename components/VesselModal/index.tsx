"use client";
import { addVessel } from "@/app/server-actions/vessel";
import { Button, Dialog, DialogPanel, Divider } from "@tremor/react";
import { useEffect, useState } from "react";

export function VesselModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="flex  w-full justify-center rounded  bg-primary bg-opacity-50 px-3 py-2 text-sm font-medium text-gray"
      >
        Add Vessel
      </button>
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
            action={addVessel}
          >
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Create a new vessel for your organization
                </label>
              </div>
              <Divider />
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Vessel Name <span className="text-meta-1">*</span>
                </label>
                <input
                  name="name"
                  placeholder="Type your vessel name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Revenue per book <span className="text-meta-1">*</span>
                </label>
                <input
                  name="revenue_per_book"
                  type="number"
                  placeholder="Type your vessel name"
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
