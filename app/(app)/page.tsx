import { Dashboard } from "@/components/Dashboard";
import { endOfMonth, startOfMonth, subDays } from "date-fns";
import { getPocketBaseServer } from "../libs/pb-server";
import { TypeVessel } from "../server-actions/vessel";
import { redirect } from "next/navigation";
import { TypeTransaction } from "../server-actions/bookings";

export default async function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
