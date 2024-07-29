"use server";

import { cookies } from "next/headers";
import { clientPb } from "../libs/pb";

export async function login(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  if (!username || !password) return;
  await clientPb
    .collection("users")
    .authWithPassword(username?.toString(), password?.toString());
  cookies().set("pb_auth", clientPb.authStore.exportToCookie());
}
