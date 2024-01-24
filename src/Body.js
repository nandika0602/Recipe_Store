import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { Outlet } from "react-router-dom";
// import { Container } from "@mui/material";

const Body = () => {
  return (
    <div style={{}}>
      {/* <Sidebar /> */}
      <Dashboard />
      <Outlet />
    </div>
  );
};

export default Body;
