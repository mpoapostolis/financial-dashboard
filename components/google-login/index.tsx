"use client";
import { ChromeIcon } from "lucide-react";
import { Button } from "../ui/button";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export default function GoogleLogin() {
  const pb = new PocketBase("https://api.findasb.com");
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await pb
          .collection("users")
          .authWithOAuth2({
            provider: "google",
          })
          .then(() => {
            setCookie("pb_auth", pb.authStore.exportToCookie());
            router.push("/admin");
          });
      }}
      className="w-full rounded-md border-gray-300 py-2 text-gray-600 hover:bg-gray-100"
      variant="outline"
    >
      <ChromeIcon className="mr-2 h-4 w-4" />
      Sign up with Google
    </Button>
  );
}
