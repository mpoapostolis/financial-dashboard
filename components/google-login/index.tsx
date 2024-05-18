"use client";
import { ChromeIcon } from "lucide-react";
import { Button } from "../ui/button";
import { getClientPb } from "@/lib/pb";

export default function GoogleLogin() {
  const pb = getClientPb();
  return (
    <Button
      onClick={async () =>
        await pb.collection("users").authWithOAuth2({
          provider: "google",
        })
      }
      className="w-full rounded-md border-gray-300 py-2 text-gray-600 hover:bg-gray-100"
      variant="outline"
    >
      <ChromeIcon className="mr-2 h-4 w-4" />
      Sign up with Google
    </Button>
  );
}
