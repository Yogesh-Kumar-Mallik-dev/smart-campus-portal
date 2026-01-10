
import { Outlet } from "react-router-dom";
import Navbar from "@/components/public-facing/common/Navbar.jsx";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
