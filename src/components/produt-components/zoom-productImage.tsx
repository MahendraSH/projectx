import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { ZoomInIcon } from "lucide-react";
import ImageCard from "./image-card";

interface ZoomProductImageProps {
  isSammll?: boolean;
  image: {
    imageUrl: string;
    alt: string;
  };
}

const ZoomProductImage: FC<ZoomProductImageProps> = ({
  isSammll = false,
  image,
}) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" size={"actions"}>
            <ZoomInIcon className="size-5" />{" "}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <ImageCard image={image} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomProductImage;
