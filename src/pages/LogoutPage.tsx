import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/app/hooks";
import { signOutUser } from "@/firebaseConfig";
import { setUser } from "@/app/features/userAuthSlice";
interface LogoutPageProps {}

const LogoutPage: FC<LogoutPageProps> = ({}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOutUser();
    localStorage.clear();
    navigate("/");
    dispatch(
      setUser({
        displayName: "",
        email: "",
        expiresId: "",
        idToken: "",
        kind: "",
        localId: "",
        refreshToken: "",
        registered: "",
      }),
    );
  };
  useEffect(() => {
    handleLogout();
  }, []);

  return <div></div>;
};

export default LogoutPage;
