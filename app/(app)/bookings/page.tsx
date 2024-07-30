import { getPocketBaseServer } from "@/app/libs/pb-server";
import { TypeTransaction } from "@/app/server-actions/bookings";
import Calendar from "@/components/Calender";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar Page | Next.js E-commerce Dashboard Template",
  description: "This is Calendar page for TailAdmin Next.js",
  // other metadata
};

const CalendarPage = async () => {
  const pb = getPocketBaseServer();
  const transactions = await pb
    .collection("bookings")
    .getFullList<TypeTransaction>({});
  return (
    <>
      <Calendar transactions={transactions} />
    </>
  );
};

export default CalendarPage;
