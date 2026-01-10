
import { Outlet } from "react-router-dom";
import Navbar from "@/components/public-facing/common/Navbar.jsx";
import Footer from "@/components/public-facing/common/Footer.jsx";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-text overflow-x-hidden">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
