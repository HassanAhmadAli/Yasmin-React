import { Product } from "../../../model/product";

import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingDialog } from "./ratingDialog";

export function ProductDrawer({ product }: { product: Product }) {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{product.title}</DrawerTitle>
        <DrawerDescription>{product.category}</DrawerDescription>
      </DrawerHeader>
      <div className="flex flex-row gap-4">
        <img
          width={400}
          src={product.image}
          alt={product.title}
          className="max-h-[300px] object-contain"
        />
        <div className="flex flex-col gap-4">
          <h3 className="mb-2 text-sm">{product.description}</h3>
          <div className="mb-3 text-2xl">
            ${product.price}
            <sup className="text-lg">99</sup>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) =>
              product.rating.rate >= i ? (
                <Star
                  key={i}
                  className="h-3 w-3 fill-orange-400 text-orange-400"
                />
              ) : (
                <Star
                  key={i}
                  className="fill-white-400 h-3 w-3 text-orange-400"
                />
              ),
            )}
          </div>
          <RatingDialog />
        </div>
      </div>
      <DrawerFooter>
        <Button
          onClick={() => {
            alert("coming soon");
          }}
        >
          Add to Cart
        </Button>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
}
