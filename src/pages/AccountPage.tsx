import Favorities from "@/components/account-components/favorities";
import Orders from "@/components/account-components/orders";
import Profile from "@/components/account-components/profile";
import { SidebarNav } from "@/components/account-components/sidebar-nav";
import { BoxIcon, HeartIcon } from "@radix-ui/react-icons";
import { ListOrderedIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import { FC } from "react";
import { Navigate, useParams } from "react-router-dom";

interface AccountPageProps {}
const sidebarNavItems = [
  {
    title: "Profile",
    href: "/account/profile",
    Icon: UserIcon,
  },
  {
    title: "Orders",
    href: "/account/orders",
    Icon: ShoppingBagIcon,
  },
  {
    title: "Favorities",
    href: "/account/favorities",
    Icon: HeartIcon,
  },
  {
    title: "Logout",
    href: "/logout",
    Icon: BoxIcon,
  },
];

const AccountPage: FC<AccountPageProps> = ({}) => {
  const params = useParams();
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 min-h-screen">
      <aside className="-mx-4 lg:w-1/5">
        <SidebarNav items={sidebarNavItems} />
      </aside>
      <div className="flex-1 lg:w-4/5 px-4">
        {params.pageId === "orders" && <Orders />}
        {params.pageId === "favorities" && <Favorities />}
        {params.pageId === "profile" && <Profile />}
        {params.pageId !== "orders" &&
          params.pageId !== "favorities" &&
          params.pageId !== "profile" && <Navigate to={"/page-not-found"} />}
      </div>
    </div>
  );
};

export default AccountPage;
