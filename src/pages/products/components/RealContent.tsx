import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../models/product";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
function RatingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Rating</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>we value your Opinion</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
const RealCellContent = ({
  products,
}: {
  isMobile: boolean;
  products: Array<Product>;
}) => {
  return (
    <div className="flex h-min flex-wrap gap-4 space-y-4">
      {products.map((product) => (
        <>
          <Card className="w-80 p-4">
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
            <RatingDialog />
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
