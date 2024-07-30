import { getClientPb } from "@/app/libs/pb";
import { TypeEmployee } from "@/app/server-actions/employees";
import { TypeVessel } from "@/app/server-actions/vessel";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";

export function useVessels() {
  const pb = getClientPb();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data, isLoading, mutate } = useSWR(
    "/vessels",
    async () =>
      await pb.collection("groups").getFullList<TypeVessel>({
        sort: "-created",
      }),
  );
  return {
    data,
    isLoading,
    mutate,
  };
}
