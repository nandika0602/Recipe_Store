import Dashboard from "./Dashboard";
import { Outlet, useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <div
      // style={{
      //   display: "grid",
      //   gap: location.pathname == "/dashboard/1" && "18vh",
      // }}
    >
      {/* <> */}
      <Dashboard />
      {/* </> */}
      {/* <> */}
      <Outlet />
      {/* </> */}
    </div>
  );
};

export default Body;
