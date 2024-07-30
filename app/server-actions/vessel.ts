"use server";

import { revalidatePath } from "next/cache";
import { getPocketBaseServer } from "../libs/pb-server";

export type TypeVessel = {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  name: string;
  updated: string;
  user: string;
  revenue_per_book: number;
};

export async function addVessel(formData: FormData) {
  const name = formData.get("name");
  const revenue_per_book = formData.get("revenue_per_book");
  const pb = getPocketBaseServer();
  const myId = pb.authStore.model?.id;
  await pb.collection("groups").create({
    user: myId,
    revenue_per_book,
    name: name?.toString(),
  });
  revalidatePath("/employees");
  return revalidatePath("/vessels");
}

export async function deleteVessel(formData: FormData) {
  const id = formData.get("id") ?? "";
  const pb = getPocketBaseServer();

  await pb.collection("groups").delete(id.toString());
  revalidatePath("/employees");
  return revalidatePath("/vessels");
}
