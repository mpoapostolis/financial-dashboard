"use server";
import { getPb } from "@/lib/pb";
import { revalidatePath } from "next/cache";

export async function createEmployee(formData: FormData) {
  const pb = getPb();
  const myId = pb.authStore.model?.id;
  await pb.collection("employees").create({
    name: formData.get("name"),
    benefits: formData.get("benefits"),
    salary: formData.get("salary"),
    user: myId,
  });
  return revalidatePath("/employees");
}
