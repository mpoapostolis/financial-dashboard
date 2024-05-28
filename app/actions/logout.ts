"use server";
import { getPb } from "@/lib/pb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  const pb = getPb();
  pb.authStore.clear();
  cookies().delete("pb_auth");

  return redirect("/auth");
}
