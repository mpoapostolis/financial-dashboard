"use server";

import { revalidatePath } from "next/cache";
import { getPocketBaseServer } from "../libs/pb-server";

export async function addEmploye(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const payPerHour = formData.get("payPerHour");
  const vessel = formData.get("vessel");
  const hoursPerWeek = formData.get("hoursPerWeek");
  const jobTitle = formData.get("jobTitle");
  const pb = await getPocketBaseServer();
  const myId = pb.authStore.model?.id;
  await pb.collection("members").create({
    owner: myId,
    name: name?.toString(),
    email: email?.toString(),
    cost_per_hour: payPerHour?.toString(),
    hours_per_week: hoursPerWeek?.toString(),

    job_title: jobTitle?.toString(),
    tracker: vessel?.toString(),
  });
  return revalidatePath("/employees");
}

export async function editEmployee(formData: FormData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const email = formData.get("email");
  const payPerHour = formData.get("payPerHour");
  const hoursPerWeek = formData.get("hoursPerWeek");
  const jobTitle = formData.get("jobTitle");
  const vessel = formData.get("vessel");
  const pb = await getPocketBaseServer();
  if (!id) return;
  const myId = pb.authStore.model?.id;
  await pb.collection("members").update(id?.toString(), {
    owner: myId,
    name: name?.toString(),
    email: email?.toString(),
    cost_per_hour: payPerHour?.toString(),
    hours_per_week: hoursPerWeek?.toString(),
    tracker: vessel?.toString(),
    job_title: jobTitle?.toString(),
  });
  return revalidatePath("/employees");
}

export async function deleteEmployee(formData: FormData) {
  const id = formData.get("id") ?? "";
  const pb = await getPocketBaseServer();

  await pb.collection("members").delete(id.toString());
  return revalidatePath("/employees");
}
