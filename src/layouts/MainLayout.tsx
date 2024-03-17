import Footer from "@/components/layout-components/footer";
import Navbar from "@/components/layout-components/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bggrad">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
