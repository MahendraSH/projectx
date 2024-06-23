import Banner from "@/components/landing-components/banner";
import Footer from "@/components/layout-components/footer";
import Navbar from "@/components/layout-components/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-sm md:max-w-full overflow-hidden">
      {/*<Banner />*/}

      <Navbar />
      <main className="bggrad">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
