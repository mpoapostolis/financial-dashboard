import { editExpandMenu } from "@/app/actions/ui-actions";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export async function Header() {
  return (
    <header className="flex sticky z-50 top-0 h-14 items-center gap-4 border-b opacity-100 bg-gray-100 px-5 dark:bg-gray-800">
      <form action={editExpandMenu}>
        <Button className="p-0" size="sm" variant="ghost">
          <Menu className="text-primary w-4 h-4" />
        </Button>
      </form>

      <Link className="font-bold mr-auto" href="/">
        <span>Findasb</span>
      </Link>

      <Select value={""}>
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Select resource" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="expenses">Expenses</SelectItem>
        </SelectContent>
      </Select>
    </header>
  );
}
