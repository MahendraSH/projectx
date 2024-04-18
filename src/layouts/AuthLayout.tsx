import { useAppSelector } from "@/app/hooks";
import Logo from "@/components/layout-components/logo";
import { LampContainer } from "@/components/ui/lamp";
import { siteConfig } from "@/utils/site-config";
import { Navigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const AuthLayout = () => {
  const user = useAppSelector((state) => state.user);
  if (user?.idToken) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className=" flex justify-center items-center gap-x-1">
        <div className="bg-card">
          <Outlet />
        </div>

        <div className=" flex-col gap-y-1 min-h-96 justify-center items-center align-middle hidden lg:block bg-muted w-1/3 relative">
          <LampContainer className="bggrad text-foreground">
            <div className=" flex justify-center items-start flex-col gap-y-4">
              <Logo isFooter />

              <div className="text-lg font-bold"> {siteConfig.subtitle}</div>
            </div>
          </LampContainer>
        </div>
      </div>
    );
  }
};

export default AuthLayout;
