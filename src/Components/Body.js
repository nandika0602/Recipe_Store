import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default Body;
