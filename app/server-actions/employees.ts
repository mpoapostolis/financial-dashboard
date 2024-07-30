"use server";

import { revalidatePath } from "next/cache";
import { getPocketBaseServer } from "../libs/pb-server";

export type TypeEmployee = {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  name: string;
  cost_per_trip: number;
  user: string;
  group: string;
  job_title: string;
};

export async function addEmploye(formData: FormData) {
  const name = formData.get("name");
  const group = formData.get("group");
  const cost_per_trip = formData.get("cost_per_trip");
  const job_title = formData.get("job_title");
  const pb = getPocketBaseServer();
  const myId = pb.authStore.model?.id;
  await pb
    .collection("employees")
    .create({
      user: myId,
      name: name?.toString(),
      cost_per_trip: cost_per_trip?.toString(),
      job_title: job_title?.toString(),
      group: group?.toString(),
    })
    .catch(console.error);
  revalidatePath("/vessels");
  return revalidatePath("/employees");
}

export async function editEmployee(formData: FormData) {
  const name = formData.get("name");
  const id = formData.get("id");
  const group = formData.get("group");
  const cost_per_trip = formData.get("cost_per_trip");
  const job_title = formData.get("job_title");
  const pb = getPocketBaseServer();
  const myId = pb.authStore.model?.id;
  if (!id) return;
  await pb
    .collection("employees")
    .update(id?.toString(), {
      user: myId,
      name: name?.toString(),
      cost_per_trip: cost_per_trip?.toString(),
      job_title: job_title?.toString(),
      group: group?.toString(),
    })
    .catch(console.error);
  revalidatePath("/vessels");
  return revalidatePath("/employees");
}

export async function deleteEmployee(formData: FormData) {
  const id = formData.get("id") ?? "";
  const pb = getPocketBaseServer();

  await pb.collection("employees").delete(id.toString());
  revalidatePath("/vessels");
  return revalidatePath("/employees");
}
