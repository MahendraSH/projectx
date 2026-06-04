import { Product } from "@/app/features/collectionsApiSlice";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useAppSelector } from "@/app/hooks";
import {
  useAddToCartMutation,
  useAddToFavouritesMutation,
} from "@/app/features/sessionApiSlice";
import toast from "react-hot-toast";

interface ImageCategoryProps {
  products: Product[];
}

const ImageCategory: FC<ImageCategoryProps> = ({ products }) => {
  const idToken = useAppSelector((state) => state.user.idToken);
  const [addToCart] = useAddToCartMutation();
  const [addToFavourites] = useAddToFavouritesMutation();

  const handleAddToCart = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    if (!idToken) {
      toast.error("Please sign in to add items to your cart.");
      return;
    }

    try {
      await addToCart({
        token: idToken,
        req: {
          productId: product.productId,
          quantity: 1,
          productMeta: {
            size: "M", // default size
            gender: product.gender,
            color: "#498fff", // default color
          },
        },
      }).unwrap();
      toast.success(`${product.title} added to cart!`);
    } catch (err: any) {
      toast.error("Failed to add to cart.");
      console.error(err);
    }
  };

  const handleAddToFavourites = async (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();

    if (!idToken) {
      toast.error("Please sign in to save items.");
      return;
    }

    try {
      await addToFavourites({
        token: idToken,
        req: {
          productId: product.productId,
          quantity: 1,
          productMeta: {
            size: "M",
            gender: product.gender,
            color: "#498fff",
          },
        },
      }).unwrap();
      toast.success(`${product.title} added to favorites!`);
    } catch (err: any) {
      toast.error("Failed to add to favorites.");
      console.error(err);
    }
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full relative px-4"
    >
      <CarouselContent className="-ml-4">
        {products.map((item, index) => {
          const ratingVal = item.rating || 4.5;
          const displayPrice = item.price ? `₹${item.price}` : "N/A";
          
          return (
            <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-fit">
              <div className="py-4">
                <Link to={`/product/${item.productId}`} className="group block">
                  <Card className="w-64 h-[380px] overflow-hidden rounded-xl bg-card/30 backdrop-blur-md border border-border/40 hover:border-primary/40 hover:shadow-[0_8px_30px_rgb(var(--primary)/0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                    
                    {/* Image Area */}
                    <div className="relative w-full h-[240px] bg-muted/20 overflow-hidden flex items-center justify-center">
                      <img
                        src={item.images?.[0]?.imageUrl || item.image?.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Glassmorphic Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-background/70 backdrop-blur-md text-foreground border border-border/30 shadow-sm uppercase tracking-wider">
                          {item.gender}
                        </span>
                        {item.category && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/20 backdrop-blur-md text-primary border border-primary/20 shadow-sm">
                            {item.category}
                          </span>
                        )}
                      </div>

                      {/* Rating Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-amber-400 border border-white/10 z-10">
                        <Star className="size-3 fill-amber-400 text-amber-400" />
                        <span>{ratingVal.toFixed(1)}</span>
                      </div>

                      {/* Quick Actions Overlay */}
                      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                        <button
                          onClick={(e) => handleAddToFavourites(e, item)}
                          className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-primary/20 border border-border/50"
                          title="Add to Favorites"
                        >
                          <Heart className="size-4" />
                        </button>
                        <button
                          onClick={(e) => handleAddToCart(e, item)}
                          className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-primary/20 border border-border/50"
                          title="Add to Cart"
                        >
                          <ShoppingCart className="size-4" />
                        </button>
                        <span
                          className="p-3 rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg hover:shadow-primary/20 border border-border/50"
                          title="View Details"
                        >
                          <Eye className="size-4" />
                        </span>
                      </div>
                    </div>

                    {/* Content Details Area */}
                    <div className="p-4 flex flex-col gap-1 bg-gradient-to-b from-card/10 to-card/50 flex-1 justify-center border-t border-border/20">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight flex-1">
                          {item.title}
                        </h3>
                        <span className="font-bold text-sm text-primary whitespace-nowrap">
                          {displayPrice}
                        </span>
                      </div>
                      
                      {item.prompt && (
                        <p className="text-[11px] text-muted-foreground line-clamp-1 italic leading-normal mt-1 border-l-2 border-primary/20 pl-2">
                          "{item.prompt}"
                        </p>
                      )}
                    </div>
                    
                  </Card>
                </Link>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 bg-background/80 border-border/50 backdrop-blur-sm shadow hover:bg-primary hover:text-primary-foreground transition-all size-9" />
      <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 bg-background/80 border-border/50 backdrop-blur-sm shadow hover:bg-primary hover:text-primary-foreground transition-all size-9" />
    </Carousel>
  );
};

export default ImageCategory;
