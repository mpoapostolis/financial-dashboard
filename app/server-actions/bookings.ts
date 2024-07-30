"use server";

import { revalidatePath } from "next/cache";
import { getPocketBaseServer } from "../libs/pb-server";
import { TypeVessel } from "./vessel";

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
  const bookings = await pb.collection("bookings").getFullList({
    filter: `bookingDate='${date}'`,
  });
  bookings.forEach(async (booking) => {
    await pb.collection("bookings").delete(booking.id, {
      $autoCancel: false,
    });
  });
  const arr = vessels
    .map((vessel) =>
      Array(Number(formData.get(vessel.id))).fill({
        user: pb.authStore.model?.id,
        group: vessel.id,
        // @ts-ignore
        bookingDate: date,
      }),
    )
    .flat(2);
  arr.forEach(async (booking) => {
    await pb
      .collection("bookings")
      .create(booking, {
        $autoCancel: false,
      })
      .catch(console.error);
  });
  revalidatePath("/bookings");
  revalidatePath("/vessels");
  return revalidatePath("/employees");
}
