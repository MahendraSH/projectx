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

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className=" w-full">
      <footer className="text-foreground body-font bggrad">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <Card className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center flex-col bg-inherit border-none shadow-none ">
              <CardHeader>
                <CardTitle>CATEGORIES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" flex justify-center items-center flex-col gap-y-1">
                  <Button variant={"link"}> Link One </Button>
                  <Button variant={"link"}> Link two </Button>
                  <Button variant={"link"}> Link three </Button>
                  <Button variant={"link"}> Link four </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center flex-col bg-inherit border-none shadow-none ">
              <CardHeader>
                <CardTitle>CATEGORIES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" flex justify-center items-center flex-col gap-y-1">
                  <Button variant={"link"}> Link One </Button>
                  <Button variant={"link"}> Link two </Button>
                  <Button variant={"link"}> Link three </Button>
                  <Button variant={"link"}> Link four </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:w-1/4 md:w-1/2 w-full px-4 flex justify-center items-center flex-col bg-inherit border-none shadow-none ">
              <CardHeader>
                <CardTitle>CATEGORIES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className=" flex justify-center items-center flex-col gap-y-1">
                  <Button variant={"link"}> Link One </Button>
                  <Button variant={"link"}> Link two </Button>
                  <Button variant={"link"}> Link three </Button>
                  <Button variant={"link"}> Link four </Button>
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
