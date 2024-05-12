import MenuItem from "./MenuItem";
import { BsFingerprint } from "react-icons/bs";

const Guestmenu = () => {
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bokkings"
        address="my-bookings"
      />
    </>
  );
};

export default Guestmenu;
