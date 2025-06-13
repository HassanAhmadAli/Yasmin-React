import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "../../../model/product";
import { Drawer } from "@/components/ui/drawer";
import { Star } from "lucide-react";
import { useProductPageState } from "../state";
import { ProductDrawer } from "./productDrawer";
import { RatingDialog } from "./ratingDialog";

export function RealCellContent({ products }: { products: Array<Product> }) {
  const isExistProductSelected = useProductPageState((state) =>
    state.isExistProductSelected(),
  );
  const resetSelectedProduct = useProductPageState(
    (state) => state.resetSelectedProduct,
  );
  const setSelectedProduct = useProductPageState(
    (state) => state.setSelectedProduct,
  );
  const selectedProduct = useProductPageState((state) => state.selectedProduct);
  return (
    <div className="flex h-min flex-wrap gap-4 space-y-4">
      <Drawer
        open={isExistProductSelected}
        onOpenChange={(open) => !open && resetSelectedProduct()}
      >
        {selectedProduct && <ProductDrawer product={selectedProduct} />}
      </Drawer>

      {products.map((product) => (
        <Card key={product._id} className="w-80 p-4">
          <CardHeader>
            <CardTitle className="text-lg">{product.title}</CardTitle>
          </CardHeader>

          <img
            src={product.image}
            className="cursor-pointer transition-opacity hover:opacity-80"
            onClick={() => setSelectedProduct(product)}
            alt={product.title}
          />
          <h2 className="flex flex-row-reverse">
            <span className="text-sm">{product.category}</span>
          </h2>
          {/* 
            className={`h-6 w-6 cursor-pointer ${
            rating >= star
              ? "fill-orange-400 text-orange-400"
              : "fill-white-400 text-orange-400"
          }`}
           */}
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
      ))}
    </div>
  );
}
