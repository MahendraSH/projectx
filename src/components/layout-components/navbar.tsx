import { setUser } from "@/app/features/userAuthSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/firebaseConfig";
import { navLink } from "@/utils/nav-link";
import { ShoppingCart } from "lucide-react";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContactUs from "../landing-components/contact-us";
import { ModeToggle } from "../mode-toggle";
import Logo from "./logo";
import Sidebar from "./sidebar";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const user = useAppSelector((state) => state.user);
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
      })
    );
  };
  return (
    <div className="flex justify-center items-center h-16    shadow-md shadow-secondary w-full bggrad ">
      <Logo />
      <div className=" ml-auto  pr-4  gap-x-5 hidden lg:flex">
        {navLink.map((item) =>
          item.link === "/#contact-us" ? (
            <ContactUs label={item.label} key={item.label} />
          ) : (
            <Link to={item.link} key={item.label}>
              <Button variant="ghost">{item.label}</Button>
            </Link>
          )
        )}
        {user?.idToken ? (
          <>
            <Link to={"/account"}>
              <Button variant={"ghost"}>Account</Button>
            </Link>
            <Button variant={"primaryGradient"} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <Link to={"/auth/login"}>
            <Button variant={"primaryGradient"}>Login</Button>
          </Link>
        )}
        <Link to={"/cart"}>
          <Button
            variant={"outline"}
            size={"icon"}
            className=" w-10 h-10 mx-2 border-x-primary  relative  border-t-blue-400 border-b-blue-300 ring-1"
          >
            <span className=" p-1.5 py-1 rounded-full absolute bg-muted-foreground text-muted  text-xs top-0 right-0 -translate-y-3 translate-x-3">
              3
            </span>
            <ShoppingCart className=" w-6 h-6   " />
          </Button>
        </Link>
        <ModeToggle />
      </div>
      <div className=" ml-auto  pr-4  gap-x-3 flex lg:hidden">
        <Sidebar />
        {user?.idToken ? (
          <Button
            size={"sm"}
            variant={"primaryGradient"}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Link to={"/auth/login"}>
            <Button size={"sm"} variant={"primaryGradient"}>
              Login
            </Button>
          </Link>
        )}
        <Link to={"/cart"}>
          <Button
            variant={"outline"}
            size={"icon"}
            className=" mx-2 border-x-primary  border-t-blue-400 border-b-blue-300 ring-1"
          >
            <ShoppingCart className=" w-5 h-5   " />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
