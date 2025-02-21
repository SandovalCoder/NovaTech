import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
