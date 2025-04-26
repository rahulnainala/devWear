import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function ProductDescription({ product }) {
  // Safely destructure with defaults
  const {
    name = "",
    image = "",
    desc = "",
    price = 0,
    rating = 0,
    inStock = false,
    reviews = [],
    sizes = [],
    colors = [],
  } = product || {};

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            {image && (
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(rating) ? "fill-primary" : "fill-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {rating} ({reviews.length} reviews)
              </span>
              <Badge
                variant="outline"
                className={
                  inStock
                    ? "text-green-600 border-green-600"
                    : "text-red-600 border-red-600"
                }
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </Badge>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-semibold">₹{price.toFixed(2)}</p>
            <p className="text-muted-foreground">{desc}</p>
          </div>
          <Separator />
          {sizes.length > 0 && (
            <div className="space-y-2">
              <Label>Size</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size.toString()}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {colors.length > 0 && (
            <div className="space-y-2">
              <Label>Color</Label>
              <RadioGroup
                defaultValue={colors[0].toLowerCase()}
                className="flex gap-4"
              >
                {colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={color.toLowerCase()}
                      id={color.toLowerCase()}
                    />
                    <Label htmlFor={color.toLowerCase()}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="flex-1">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              Buy Now
            </Button>
          </div>
          <div className="pt-8">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            {reviews.length > 0 ? (
              <div className="space-y-6 mt-4">
                {reviews.map((review) => (
                  <div key={review._id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-primary" : "fill-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{review.user}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground mt-4">No reviews yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
