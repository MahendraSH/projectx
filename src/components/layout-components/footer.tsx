import { siteConfig } from "@/utils/site-config";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FC } from "react";
import Logo from "./logo";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { navLink } from "@/utils/nav-link";
import { Link } from "react-router-dom";
import ContactUs from "../landing-components/contact-us";
import { Mail, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className=" w-full">
      <footer className="text-foreground body-font bggrad">
        <div className="md:container md:px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex flex-col justify-center items-center">
            <Logo isFooter={true} />
            <p className="mt-2  text-lg text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="  py-4  flex justify-center items-center gap-5">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
              >
                <InstagramLogoIcon className=" w-5 h-5" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
              >
                <LinkedInLogoIcon className=" w-5 h-5" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
              >
                <TwitterLogoIcon className=" w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left justify-center items-baseline text-center">
            <Card className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center flex-col bg-inherit border-none shadow-none ">
              <CardHeader>
                <CardTitle>Quick Links </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" flex justify-center items-baseline flex-col gap-y-1">
                  {navLink.map((item) =>
                    item.label === "Contact Us" ? (
                      <ContactUs
                        label={item.label}
                        key={item.link}
                        isFooter={true}
                      />
                    ) : (
                      <Link to={item.link} key={item.label}>
                        <Button variant={"link"}>{item.label}</Button>
                      </Link>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center flex-col bg-inherit border-none shadow-none ">
              <CardHeader>
                <CardTitle> Support </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" flex justify-center items-baseline flex-col gap-y-1">
                  <Link to="/return">
                    <Button variant={"link"}> Return policy </Button>
                  </Link>
                  <Link to="/privacy">
                    <Button variant={"link"}> Privacy policy </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center flex-col bg-inherit border-none shadow-none ">
              <CardHeader>
                <CardTitle>More Support </CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" flex justify-center items-baseline flex-col gap-y-1">
                  {/* contact and Email and Address info */}
                  <Button variant={"link"}>
                    <PhoneIcon className="size-4 mr-2" /> +916301667568
                  </Button>
                  <Button variant={"link"} size={"sm"}>
                    <MailIcon className="size-4 mr-2" />
                    chandurivarshith1729@gmail.com
                  </Button>
                  <div className="flex text-sm   justify-start  gap-x-2 text-primary">
                    <MapPinIcon className="size-10 mr-2" />
                    Address : Just say "Dilshukh Nagar ka Don" you will reach my
                    home
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-background text-foreground lg: pd-4 min-h-16">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className=" text-foreground  text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {siteConfig.name} —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-muted-foreground    ml-1"
                target="_blank"
              >
                @ Lorem.
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-5">
              <InstagramLogoIcon className=" w-5 h-5" />
              <LinkedInLogoIcon className=" w-5 h-5" />
              <TwitterLogoIcon className=" w-5 h-5" />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
