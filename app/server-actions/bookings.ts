"use server";

import { revalidatePath } from "next/cache";
import { getPocketBaseServer } from "../libs/pb-server";
import { TypeVessel } from "./vessel";
import { addDays } from "date-fns";

export type TypeTransaction = {
  id: string;
  group: string;
  user: string;
  bookingDate: number;
};

export async function addBooking(formData: FormData) {
  const pb = getPocketBaseServer();

  const vessels = await pb.collection("groups").getFullList<TypeVessel>({
    sort: "-created",
  });

  const bookingDate = formData.get("bookingDate");
  const date = Number(bookingDate);
  // const bookings = await pb.collection("bookings").getFullList({
  //   filter: `bookingDate='${date}'`,
  // });
  // bookings.forEach(async (booking) => {
  //   await pb.collection("bookings").delete(booking.id, {
  //     $autoCancel: false,
  //   });
  // });
  const arr = vessels.map((vessel) =>
    Array(Number(formData.get(vessel.id))).fill({
      user: pb.authStore.model?.id,
      group: vessel.id,
      // @ts-ignore
      bookingDate: date,
    }),
  );
  // .map((booking, i) => ({
  //   ...booking,
  //   bookingDate: addDays(date, i).getTime(),
  // }));

  const xx = arr.map((booking) => {
    return booking.map((b, idx) => {
      return {
        ...b,
        bookingDate: addDays(date, idx).getTime(),
      };
    });
  });

  const y = () =>
    Promise.all(
      xx.flat(2).map(async (booking) => {
        return await pb.collection("bookings").create(booking, {
          $autoCancel: false,
        });
      }),
    );
  await y();
  revalidatePath("/bookings");
}
