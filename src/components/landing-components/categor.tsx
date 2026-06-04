import { FC, useRef, useEffect } from "react";
import ImageCategory from "./images-category";
import { useGetActiveCollectionsQuery } from "@/app/features/collectionsApiSlice";
import { Loader2, Sparkles, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface CategoryProps {}

const Category: FC<CategoryProps> = ({}) => {
  const { data, isLoading, isError, isSuccess } = useGetActiveCollectionsQuery();
  const shopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#shop" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div id="shop" ref={shopRef} className="scroll-mt-20"></div>

      {/* Main Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3 animate-pulse">
          <Sparkles className="size-3.5" />
          <span>Exclusive Apparel Drops</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary/80">
          Shop Curated Collections
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
          Explore our seasonal drops featuring designs generated with advanced AI prompts and built with premium, comfort-first materials.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Collections Content */}
      <div className="w-full max-w-7xl mx-auto space-y-16">
        {(isLoading || isError) && (
          <div className="w-full flex flex-col justify-center items-center py-20 gap-3">
            <Loader2 className="size-12 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Loading collections...</p>
          </div>
        )}

        {isSuccess &&
          data.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/20 backdrop-blur-md p-6 md:p-8 hover:border-primary/20 transition-all duration-500 shadow-sm"
            >
              {/* Subtle backglow gradient per collection card */}
              <div className="absolute -right-24 -top-24 size-48 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
              
              {/* Collection Row Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-border/20 pb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                      {item.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/50">
                      <ShoppingBag className="size-3" />
                      {item.products?.length || 0} Items
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Responsive Carousel Slider */}
              <div className="w-full">
                <ImageCategory products={item.products} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Category;
