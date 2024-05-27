import { cookies } from "next/headers";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://api.findasb.com");
export const getPb = () => {
  if (pb.authStore.isValid) return pb;
  else {
    pb.authStore.loadFromCookie(cookies().get("pb_auth")?.value ?? "");
    return pb;
  }
};
