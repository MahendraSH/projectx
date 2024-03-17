import { Link, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    Icon: any;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav
      className={cn(
        "flex space-x-2 flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            location.pathname === item.href
              ? " bg-primary hover:bg-primary/70 text-primary-foreground"
              : "hover:bg-muted hover:text-muted-foreground  hover:underline",
            "justify-start",
          )}
        >
          <item.Icon className="w-5 h-5 mx-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
