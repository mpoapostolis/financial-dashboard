import { logout } from "@/app/actions/logout";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  BarChartIcon,
  WalletIcon,
  ReceiptIcon,
  SettingsIcon,
  LogOut,
  SunIcon,
  MoonIcon,
} from "lucide-react";
import Link from "next/link";
import { editTheme } from "@/app/actions/ui-actions";
import { getPb } from "@/lib/pb";

const items = [
  {
    icon: HomeIcon,
    href: "/overview",
    label: "Home",
  },
  {
    icon: BarChartIcon,
    href: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: WalletIcon,
    href: "/accounts",
    label: "Accounts",
  },
  {
    icon: ReceiptIcon,
    href: "/taxes",
    label: "Taxes",
  },
  {
    icon: SettingsIcon,
    href: "/settings",
    label: "Settings",
    className: "mt-auto",
  },
];

export function SideBar() {
  const pb = getPb();
  const currentTheme = pb.authStore.model?.ui_state?.theme ?? "light";
  const open = pb.authStore.model?.ui_state?.expandedMenu ?? false;
  return (
    <div
      style={{
        height: `calc(100vh - 56px)`,
      }}
      className={cn(
        "absolute   md:sticky top-14 bg-gray-100/80 dark:bg-gray-800/80 border-r py-4",
        {
          "md:w-14 hidden md:block": !open,
          "md:w-56": open,
        },
      )}
    >
      <nav
        className={cn("flex  h-full flex-col gap-2", {
          "items-center": !open,
          "px-2": open,
        })}
      >
        {items.map((item) => (
          <Link
            className={cn(
              "flex items-center gap-3 text-lg rounded-lg px-3 py-2 text-gray-500  font-semibold transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
              item.className,
            )}
            key={item.href}
            href={item.href}
          >
            <item.icon size={16} />
            {open && <span className="text-xs">{item.label}</span>}
          </Link>
        ))}
        <form action={editTheme}>
          <button
            className="flex items-center gap-3 text-lg rounded-lg px-3 py-2 text-gray-500  font-semibold transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            type="submit"
          >
            <input
              type="hidden"
              name="theme"
              value={currentTheme === "light" ? "dark" : "light"}
            />
            {currentTheme === "dark" ? (
              <SunIcon size={16} />
            ) : (
              <MoonIcon size={16} />
            )}
            {open && (
              <span className="text-xs">
                {currentTheme === "light" ? "Dark Theme" : "Light Theme"}
              </span>
            )}
            {/* {open && <Switch className="ml-auto [--theme:dark]" />} */}
          </button>
        </form>

        <form action={logout}>
          <button
            className="flex items-center gap-3 text-lg rounded-lg px-3 py-2 text-gray-500  font-semibold transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            type="submit"
          >
            <LogOut size={16} />
            {open && <span className="text-xs">Sign out</span>}
          </button>
        </form>
      </nav>
    </div>
  );
}
