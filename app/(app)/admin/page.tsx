import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

import {
    ArrowLeftIcon,
    ArrowUpDownIcon,
    BarChartIcon,
    BellIcon,
    CalendarClockIcon,
    DownloadIcon,
    HomeIcon,
    PieChartIcon,
    ReceiptIcon,
    SearchIcon,
    SettingsIcon,
    TvIcon,
    WalletIcon,
} from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookie = cookies().get("pb_auth")?.value;
  if (!cookie) return redirect("/auth");
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <PieChartIcon className="h-6 w-6" />
              <span className="">Acme Finances</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <BarChartIcon className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <WalletIcon className="h-4 w-4" />
                Accounts
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <ReceiptIcon className="h-4 w-4" />
                Taxes
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <PieChartIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
            <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
            <div className="ml-auto flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="w-[280px] justify-start text-left font-normal"
                    id="date"
                    variant="outline"
                  >
                    <CalendarClockIcon className="mr-2 h-4 w-4" />
                    June 01, 2023 - June 30, 2023
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-auto p-0">
                  <Calendar initialFocus mode="range" numberOfMonths={2} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Revenue</CardDescription>
                  <CardTitle>$123,456.78</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <LineChart className="aspect-[4/3]" /> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Expenses</CardDescription>
                  <CardTitle>$45,678.90</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <BarChart className="aspect-[4/3]" /> */}
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardDescription>Profit</CardDescription>
                  <CardTitle>$77,777.88</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <PieChart className="aspect-[4/3]" /> */}
                </CardContent>
              </Card>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            className="ml-auto shrink-0"
                            variant="outline"
                          >
                            <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                            Sort
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                          <DropdownMenuRadioGroup value="date">
                            <DropdownMenuRadioItem value="date">
                              Date
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="amount">
                              Amount
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="type">
                              Type
                            </DropdownMenuRadioItem>
                          </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>06/01/2023</TableCell>
                    <TableCell>Checking</TableCell>
                    <TableCell>$1,234.56</TableCell>
                    <TableCell>Income</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>06/05/2023</TableCell>
                    <TableCell>Savings</TableCell>
                    <TableCell>$567.89</TableCell>
                    <TableCell>Transfer</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>06/10/2023</TableCell>
                    <TableCell>Checking</TableCell>
                    <TableCell>$2,345.67</TableCell>
                    <TableCell>Expense</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <DownloadIcon className="h-4 w-4" />
                        <span className="sr-only">Download</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
