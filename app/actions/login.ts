"use server";
import { cookies } from "next/headers";
import PocketBase from "pocketbase";

const clientPb = new PocketBase("https://api.findasb.com");
const getPb = () => {
  if (clientPb.authStore.isValid) return clientPb;
  else {
    clientPb.authStore.loadFromCookie("auth");
    return clientPb;
  }
};
export async function login(formData: FormData) {
  const pb = getPb();

  await pb.collection("users").authWithOAuth2({
    provider: "google",
  });

  cookies().set("pb_auth", pb.authStore.exportToCookie());
}
