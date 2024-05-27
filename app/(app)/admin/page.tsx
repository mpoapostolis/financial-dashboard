import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookie = cookies().get("pb_auth")?.value;
  if (!cookie) return redirect("/auth");
  return <main className="p-6">asdasd</main>;
}
