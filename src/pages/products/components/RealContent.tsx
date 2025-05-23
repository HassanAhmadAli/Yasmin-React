import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../models/product";

import { Star } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const RealCellContent = ({
  products,
}: {
  isMobile: boolean;
  products: Array<Product>;
}) => {
  
  return (
    <div className="flex flex-wrap space-y-4">
      {products.map((product) => (
        <>
          <Card
            className="w-80 p-4"
          
          >
            <CardHeader>
              <CardTitle className="text-lg">{product.title}</CardTitle>
            </CardHeader>

            <img src={product.image} />
            <h2 className="flex flex-row-reverse">
              <span className="text-sm">{product.category}</span>
            </h2>
            <h3 className="mb-2 text-sm">{product.description}</h3>

            <div className="mb-2 flex items-center gap-2">
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
              <span className="text-sm text-blue-600">
                {product.rating.count}
              </span>
            </div>
            <div className="mb-3 text-2xl">
              ${product.price}
              <sup className="text-lg">99</sup>
            </div>
          
          </Card>
        </>
      ))}
    </div>
  );
};
export { RealCellContent };
