import { Button } from "@/components/ui/button";
import { CheckCircle2, DeleteIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OrderCards = () => {
  return (
    <Card className="mb-4 mr-10 flex flex-row">
      <div>
        <CardHeader>
          <CardTitle>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5 items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-md" />
                <div>
                  <span className="text-xl font-medium">Product Name</span>
                  <CardDescription>Category : </CardDescription>
                </div>
              </div>
              <select className="border rounded px-2 py-1 text-sm h-10">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300">
                Product description and features would appear here. This could
                include size, color, or other specifications.
              </p>
            </div>
          </div>
        </CardContent>
      </div>
      <div className="flex w-25 justify-center items-center border-l">
        <Button className="bg-red-600 hover:bg-red-700">
          <DeleteIcon />
        </Button>
      </div>
    </Card>
  );
};

const PriceCards = () => {
  return (
    <Card className="sticky top-4 h-[50%] pt-10">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-lg">Subtotal (2 items)</span>
          <span className="text-lg">₹2,598</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg">Shipping</span>
          <span className="text-green-600 text-lg">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-lg">Tax</span>
          <span className="text-lg">₹260</span>
        </div>
        <div className="border-t pt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹2,858</span>
        </div>
      </CardContent>
      <CardFooter>
        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-md font-medium">
          Proceed to Checkout
        </button>
      </CardFooter>
    </Card>
  );
};

export default function Page() {
  return (
    <div className="px-4 md:px-20 w-full">
      <div className="flex flex-col gap-2 dark:bg-gray-800 w-full py-8">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Your Shopping Cart
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Review your selected items before checkout. Edit quantities, remove
          products, or continue shopping. Your cart is saved automatically and
          items are reserved while you complete your purchase.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-green-600 dark:text-green-400">
            <CheckCircle2 />
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Free shipping on orders over ₹2000
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <div className="w-[70%]">
          <OrderCards />
          <OrderCards />
          <OrderCards />
          <OrderCards />
        </div>
        <div className="w-[30%]">
          <PriceCards />
        </div>
      </div>
    </div>
  );
}
