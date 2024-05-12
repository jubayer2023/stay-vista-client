// icons
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
// component
import MenuItem from "./MenuItem";

const HostMenu = () => {
  return (
    <>
      <MenuItem icon={BsFillHouseAddFill} label="Add Room" address="add-room" />
      <MenuItem icon={MdHomeWork} label="My Listings" address="my-listings" />
    </>
  );
};

export default HostMenu;
