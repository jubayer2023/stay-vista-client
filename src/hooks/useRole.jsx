import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user, loading } = useAuth();

  const { data: role = "", isLoading } = useQuery({
    enabled: !loading || !!user?.email,
    queryKey: [user],
    queryFn: async () => {
      const role = await getRole(user?.email);
      // console.log(role);
      return role;
    },
  });

  return [role, isLoading];
};

export default useRole;
