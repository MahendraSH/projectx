import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EqualIcon, MoveRight } from "lucide-react";
import { Separator } from "@radix-ui/react-select";
import { Button } from "../ui/button";

interface TotalCostCardProps {
  product: {
    title: string;
    price: number;
  }[];
}

const TotalCostCard: FC<TotalCostCardProps> = ({ product }) => {
  const total = product.reduce((total, item) => total + item.price, 0);
  return (
    <>
      <Card className="w-full min-h-40">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead> </TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product.map((item, index) => (
                <TableRow key={index}>
                  <TableCell> {item.title} </TableCell>
                  <TableCell>
                    <MoveRight className="size-4" />
                  </TableCell>
                  <TableCell>
                    {"₹"} {item.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableCell> Total </TableCell>
              <TableCell>
                <EqualIcon className="size-4" />{" "}
              </TableCell>
              <TableCell>
                {"₹"} {total}{" "}
              </TableCell>
            </TableFooter>
          </Table>
        </CardContent>
        <CardContent>
          <Button variant={"primaryGradient"} className=" w-full">
            {" "}
            Check Out
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TotalCostCard;
