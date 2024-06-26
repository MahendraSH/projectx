import { useAppSelector } from "@/app/hooks";
import Logo from "@/components/layout-components/logo";
import { LampContainer } from "@/components/ui/lamp";
import { siteConfig } from "@/utils/site-config";
import { Navigate, useNavigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  if (user?.idToken) {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
    }
    return <Navigate to="/" replace />;
  } else {
    return (
      <div className=" flex justify-center  bggrad gap-x-1 lg:max-h-[90vh] overflow-hidden">
        <div className="bggrad lg:w-1/2 lg:px-16">
          <Outlet />
        </div>

        <div className=" flex-col gap-y-1 min-h-96 justify-center  items-center w-1/2 align-middle hidden lg:block bggrad  relative">
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
