import { getClientPb } from "@/app/libs/pb";
import { TypeEmployee } from "@/app/server-actions/employees";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";

export function useEmployees() {
  const pb = getClientPb();
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const id = searchParams.get("id");
  const { data, isLoading, mutate } = useSWR(
    "/employees",
    async () =>
      await pb.collection("employees").getFullList<TypeEmployee>({
        sort: "-created",
      }),
  );
  return {
    data,
    isLoading,
    mutate,
  };
}
