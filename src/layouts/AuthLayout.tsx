import { useAppSelector } from "@/app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const user = useAppSelector((state) => state.user);
  if (user?.idToken) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default AuthLayout;
