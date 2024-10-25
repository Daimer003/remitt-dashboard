import { useQuery } from "@tanstack/react-query";
import { ServicesStaking } from "@/services/staking.service";
import { AxiosResponse } from "axios";

export const useStakingPackages = (token: any) => {
  return useQuery<AxiosResponse<any> | undefined, Error>({
    queryKey: ["stakingPackages", token],
    queryFn: async () => {
      try {
        return await ServicesStaking.getPackages(token);
      } catch (error) {
        console.error("Error fetching staking packages:", error);
        throw error; // Lanzamos el error para que `react-query` lo gestione.
      }
    },
    enabled: Boolean(token),
    staleTime: 1000 * 60 * 5,
  });
};