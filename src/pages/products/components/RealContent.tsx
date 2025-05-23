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
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Rating</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Rating</DialogTitle>
          <DialogDescription>We value your opinion</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="comment" className="text-right">
              Comment
            </Label>
            <Input
              id="comment"
              placeholder="Enter your comment"
              className="col-span-3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Rating</Label>
            <div className="col-span-3 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 cursor-pointer ${
                    rating >= star ? "fill-orange-400 text-orange-400" : "fill-white-400 text-orange-400"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Rating</Button>
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
