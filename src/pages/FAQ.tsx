import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface AccordionData {
  title: string;    
  content: string[];
}

const accordionData: AccordionData[] = [
  {
    title: "Product Availability",
    content: [
      "We currently have a wide range of products available in stock.",
      "However, availability may vary depending on demand and stock levels.",
    ],
  },
  {
    title: "Shipping Information",
    content: [
      "We offer worldwide shipping to most countries.",
      "Shipping times may vary depending on your location and chosen shipping method.",
    ],
  },
  {
    title: "Return Policy",
    content: [
      "We have a hassle-free return policy within 30 days of purchase.",
      "Please ensure the product is unused and in its original packaging for a full refund.",
    ],
  },
  {
    title: "Sizing Guide",
    content: [
      "Please refer to our sizing guide for accurate measurements.",
      "If you're unsure about sizing, feel free to contact our customer support team for assistance.",
    ],
  },
  {
    title: "Payment Options",
    content: [
      "We accept various payment methods, including credit/debit cards, PayPal, and more.",
      "All transactions are securely processed to ensure your information is protected.",
    ],
  },
  {
    title: "Customer Support",
    content: [
      "Our customer support team is available 24/7 to assist you with any inquiries or issues.",
      "You can reach us via email, phone, or live chat for immediate assistance.",
    ],
  },
  {
    title: "Product Warranty",
    content: [
      "Most of our products come with a standard manufacturer's warranty.",
      "Please check the product details for specific warranty information.",
    ],
  },
  {
    title: "Promotions and Discounts",
    content: [
      "We regularly offer promotions and discounts on select products.",
      "Subscribe to our newsletter to stay updated on the latest deals and offers.",
    ],
  },
  {
    title: "Privacy Policy",
    content: [
      "Your privacy is important to us.",
      "We adhere to strict privacy policies to protect your personal information.",
    ],
  },
  {
    title: "Security Measures",
    content: [
      "We implement advanced security measures to safeguard your transactions.",
      "Our website is SSL certified to ensure secure data transmission.",
    ],
  },
];

import { FC } from "react";
import ContactUs from "@/components/landing-components/contact-us";

interface FrequentlyAskedQuestionsProps {}

const FrequentlyAskedQuestions: FC<FrequentlyAskedQuestionsProps> = ({}) => {
  return (
    <div className=" bggrid  min-h-screen w-full pt-16">
      <Card className=" flex bg-inherit   justify-center  flex-col lg:flex-row h-full w-full">
        <CardHeader className="lg:w-1/3">
          <CardTitle className=" text-4xl font-semibold ">
            Frequently Asked Questions
          </CardTitle>
          <CardDescription className="text-lg font-medium      ">
            Haven’t found what you’re looking for?{" "}
            <ContactUs label="ContactUs" />
          </CardDescription>
        </CardHeader>
        <CardContent className="lg:w-2/3 w-full flex justify-center items-center">
          <Accordion type="single" collapsible className="lg:w-[80%] w-[90%]">
            {accordionData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl">
                  {item.title}
                </AccordionTrigger>
                {item.content.map((content, idx) => (
                  <AccordionContent key={idx} className="text-xl">
                    {content}
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrequentlyAskedQuestions;
