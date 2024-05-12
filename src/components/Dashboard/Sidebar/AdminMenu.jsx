import MenuItem from "./MenuItem";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="Manage users" address="manage-users" />
    </>
  );
};

export default AdminMenu;
