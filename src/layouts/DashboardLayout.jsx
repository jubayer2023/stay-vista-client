import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Helmet>
        <title>stayVista | dashboard</title>
      </Helmet>
      {/* Sidebar Component */}
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          {/* Outlet for dynamic contents */}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
