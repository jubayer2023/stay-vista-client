import { useQuery } from "@tanstack/react-query";
import { getAdminStat } from "../api/utitls";

const useAdminStats = () => {
  const {
    data: adminStats = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["admin-stat"],
    queryFn: async () => {
      return await getAdminStat();
    },
  });
  return [adminStats, refetch, isLoading];
};

export default useAdminStats;
