import { useAppSelector } from "@/app/hooks";
import { LoaderIcon } from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

const AuthOnlyLayout = () => {
  const user = useAppSelector((state) => state.user);

  if (!user?.idToken) {
    return <Navigate to="/auth/login" />;
  } else {
    return <Outlet />;
  }
};

export default AuthOnlyLayout;
