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
          <LampContainer>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              <Logo isFooter />

              <p className=" text-xl "> {siteConfig.description}</p>
              <p className="text-lg"> {siteConfig.subtitle}</p>
            </motion.h1>
          </LampContainer>
        </div>
      </div>
    );
  }
};

export default AuthLayout;
