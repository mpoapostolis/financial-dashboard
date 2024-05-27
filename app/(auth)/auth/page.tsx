import GoogleLogin from "@/components/google-login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
export default function Page() {
  const cookie = cookies().get("pb_auth")?.value;
  if (cookie) return redirect("/admin");
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 py-12 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <div className="space-y-8">
          <div className="text-center">
            <img
              alt="Logo"
              className="mx-auto"
              height={48}
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width={48}
            />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <Tabs className="space-y-8" defaultValue="login">
            <TabsList className="flex justify-center">
              <TabsTrigger className=" w-full" value="login">
                Login
              </TabsTrigger>
              <TabsTrigger className=" w-full" value="register">
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4">
                <div>
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    id="email"
                    placeholder="Email address"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    id="password"
                    placeholder="Password"
                    required
                    type="password"
                  />
                </div>
                <Button
                  className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-500"
                  type="submit"
                >
                  Sign in
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4">
                <div>
                  <Label className="sr-only" htmlFor="name">
                    Name
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    id="name"
                    placeholder="Name"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <Label className="sr-only" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    id="email"
                    placeholder="Email address"
                    required
                    type="email"
                  />
                </div>
                <div>
                  <Label className="sr-only" htmlFor="password">
                    Password
                  </Label>
                  <Input
                    className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    id="password"
                    placeholder="Password"
                    required
                    type="password"
                  />
                </div>
                <Button
                  className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-500"
                  type="submit"
                >
                  Register
                </Button>
              </form>
            </TabsContent>
            <GoogleLogin />
          </Tabs>
        </div>
      </div>
    </div>
  );
}
