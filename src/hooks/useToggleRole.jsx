import { useContext } from "react";
import { RoleContext } from "../providers/RoleProvider";

const useToggleRole = () => {
  const toggle = useContext(RoleContext);
  return toggle;
};

export default useToggleRole;
