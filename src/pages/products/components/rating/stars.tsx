import { Star } from "lucide-react";
import { useProductPageState } from "../../state";

export function Stars() {
  const rating = useProductPageState((state) => state.rating);
  const setRating = useProductPageState((state) => state.setRating);
  return (
    <div className="col-span-3 flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-6 w-6 cursor-pointer ${
            rating >= star
              ? "fill-orange-400 text-orange-400"
              : "fill-white-400 text-orange-400"
          }`}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
}
