"use client";
import { ChromeIcon } from "lucide-react";
import { Button } from "../ui/button";
import { getPb } from "@/lib/pb";
import { setCookie } from "cookies-next";

export default function GoogleLogin() {
  const pb = getPb();
  return (
    <Button
      onClick={async () => {
        await pb.collection("users").authWithOAuth2({
          provider: "google",
        });
        setCookie("pb_auth", pb.authStore.exportToCookie());
      }}
      className="w-full rounded-md border-gray-300 py-2 text-gray-600 hover:bg-gray-100"
      variant="outline"
    >
      <ChromeIcon className="mr-2 h-4 w-4" />
      Sign up with Google
    </Button>
  );
}
