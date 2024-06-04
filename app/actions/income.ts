"use server";
import { getPb } from "@/lib/pb";
import { revalidatePath } from "next/cache";

export async function createIncome(formData: FormData) {
  const pb = getPb();
  const myId = pb.authStore.model?.id;
  await pb.collection("income").create({
    name: formData.get("name"),
    revenuePerBook: 123,
    user: myId,
  });
  return revalidatePath("/income");
}

export async function editIncome(formData: FormData) {
  const pb = getPb();
  const myId = pb.authStore.model?.id;
  const id = formData?.get("id")?.toString();
  if (!id) return console.error("No id found");

  await pb.collection("income").update(id, {
    name: formData.get("name"),
    revenuePerBook: 123,
    user: myId,
    // employees: ,
  });
  return revalidatePath("/income");
}

export async function deleteIncome(formData: FormData) {
  const pb = getPb();
  const id = formData?.get("id")?.toString();
  if (!id) return console.error("No id found");
  await pb.collection("income").delete(id);
  return revalidatePath("/income");
}
