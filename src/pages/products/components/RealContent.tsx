import React from "react";
import { UserDropdownMenu } from "./dropDownMenu";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../models/product";
/////

import { Star } from "lucide-react";
export default function ProductCard() {
  return (
    <Card className="w-80 p-4">
      <div className="relative mb-4 aspect-square rounded bg-gradient-to-br from-pink-50 to-blue-50">
        <span className="absolute left-2 top-2 rounded bg-gray-100 px-2 py-1 text-xs">
          Sponsored ⓘ
        </span>
      </div>

      <h3 className="mb-2 text-sm">
        {"Mantieqingway Men's Cotton Floral Neck Tie 2.56\" Printed Skinny Tie"}
      </h3>

      <div className="mb-2 flex items-center gap-2">
        <div className="flex">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
          ))}
          <Star className="h-3 w-3 fill-orange-400/50 text-orange-400" />
        </div>
        <span className="text-sm text-blue-600">1,648</span>
      </div>

      <p className="mb-3 text-sm text-gray-600">500+ bought in past month</p>

      <div className="mb-3 text-2xl">
        $12<sup className="text-lg">99</sup>
      </div>

      <div className="text-sm">
        <div>
          Delivery <strong>Thu, Jun 5</strong>
        </div>
        <div className="text-blue-600">Ships to Netherlands</div>
      </div>
    </Card>
  );
}
/////
const RealCellContent = ({
  products,
}: {
  isMobile: boolean;
  products: Array<Product>;
}) => {
  const MobileCellContent = function () {
    
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <Card key={product._id}>
            <CardHeader>
              <CardTitle className="text-lg">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <img src={product.image} width={60} />
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <>
                    <span className="text-sm font-medium">title:</span>
                    <span className="break-all text-sm">{product.title}</span>
                  </>
                  <>
                    <span className="text-sm font-medium">description:</span>
                    <span className="break-words text-sm">
                      {product.description}
                    </span>
                  </>
                  <>
                    <span className="text-sm font-medium">rating:</span>
                    <span className="text-sm">
                      {product.rating.rate} / {product.rating.count}
                    </span>
                  </>
                  <>
                    <span className="text-sm font-medium">price:</span>
                    <span className="text-sm">
                      {product.rating.rate} #{product.price}
                    </span>
                  </>
                  <>
                    <span className="text-sm font-medium">category:</span>
                    <span className="text-sm">{product.category}</span>
                  </>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return <MobileCellContent />;
};
export { RealCellContent };
