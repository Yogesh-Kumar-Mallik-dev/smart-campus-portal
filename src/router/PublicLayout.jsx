
import { Outlet } from "react-router-dom";
import Navbar from "@/components/public-facing/common/Navbar.jsx";
import Footer from "@/components/public-facing/common/Footer.jsx";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
