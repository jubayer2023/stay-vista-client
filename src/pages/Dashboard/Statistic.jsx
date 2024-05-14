import useRole from "../../hooks/useRole";
import useToggleRole from "../../hooks/useToggleRole";
import AdminRoute from "../../routes/AdminRoute";
import HostRoute from "../../routes/HostRoute";
import AdminStatistics from "./Admin/AdminStatistics";
import GuestStatistics from "./Guest/GuestStatistics";
import HostSatistics from "./Host/HostSatistics";

const Statistic = () => {
  const [role] = useRole();
  const { toggle } = useToggleRole();
  console.log(toggle);
  if (role === "guest") {
    return <GuestStatistics></GuestStatistics>;
  }
  if (role === "admin") {
    return (
      <AdminRoute>
        <AdminStatistics></AdminStatistics>
      </AdminRoute>
    );
  }
  if (role === "host" && toggle === true) {
    return (
      <HostRoute>
        <HostSatistics></HostSatistics>
      </HostRoute>
    );
  } else if (role === "host" && toggle === false) {
    return <GuestStatistics></GuestStatistics>;
  }
};

export default Statistic;
