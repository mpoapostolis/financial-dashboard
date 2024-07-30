"use client";
import { TypeTransaction, addBooking } from "@/app/server-actions/bookings";
import { useVessels } from "@/hooks/useVessels";
import { Button, Dialog, DialogPanel, Divider } from "@tremor/react";
import { format } from "date-fns";
import { Fragment, useEffect, useState, useTransition } from "react";
import { useTransactions } from "@/hooks/useTransactions";

export function TransactionModal(props: {
  transactions: TypeTransaction[];
  children: React.ReactNode;
  date: string;
}) {
  const [open, setOpen] = useState(false);
  const { data: vessels } = useVessels();

  const map = new Map();
  props.transactions
    ?.filter((e) => +e.bookingDate === new Date(props.date).getTime())
    ?.forEach((t) => {
      const current = map.get(t.group) ?? 0;
      map.set(t.group, current + 1);
    });

  return (
    <div key={props.date} className="h-full w-full ">
      <button className="p-6a h-full  w-full" onClick={() => setOpen(true)}>
        {props.children}
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
            action={addBooking}
          >
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  {format(new Date(props.date), "dd MMMM yyyy")}
                </label>
              </div>
              <Divider />
              <input
                name="bookingDate"
                value={new Date(props.date).getTime()}
                hidden
              />
              <div className="grid w-full grid-cols-2 items-center gap-4">
                {vessels?.map((v) => (
                  <Fragment key={v.id}>
                    <label className="block text-black dark:text-white">
                      {v.name}:
                    </label>
                    <input
                      type="number"
                      name={v.id}
                      defaultValue={map.get(v.id) ?? 0}
                      placeholder="Trips completed"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-3 py-2 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </Fragment>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
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
