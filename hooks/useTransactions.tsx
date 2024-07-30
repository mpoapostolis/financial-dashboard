import { getClientPb } from "@/app/libs/pb";
import { TypeTransaction } from "@/app/server-actions/bookings";
import { TypeEmployee } from "@/app/server-actions/employees";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";

export function useTransactions() {
  const pb = getClientPb();
  const { data, isLoading, mutate } = useSWR(
    "/bookings",
    async () =>
      await pb.collection("bookings").getFullList<TypeTransaction>({
        sort: "bookingDate",
      }),
  );
  return {
    data,
    isLoading,
    mutate,
  };
}
