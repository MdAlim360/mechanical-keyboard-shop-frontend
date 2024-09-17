import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Layout() {
  return (
    // className="mt-6 container mx-auto px-4"
    <div>
      <div className="mb-0 md:mb-0 lg:mb-28">
        <Navbar />
      </div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
