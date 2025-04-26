import { Image } from "@heroui/image";
import { ArrowUpRight, Share2Icon } from "lucide-react";
import { Card, CardBody, CardFooter } from "@heroui/card";

export const CustomCard = ({ onClick, name, price, image }) => (
  <Card
    isPressable
    shadow="sm"
    className="w-[100%] h-[90%] cursor-pointer hover:shadow-xl transition-shadow shadow-lg"
    onPress={onClick}
  >
    <CardBody className=" h-[100%] overflow-hidden p-0">
      <Image
        alt={name}
        src={image}
        width="100%"
        height="100%"
        radius="lg"
        shadow="sm"
        className="w-full object-cover h-100%"
      />
    </CardBody>
    <CardFooter>
      <div className="flex w-full py-1 justify-between items-center">
        <div className="flex flex-col items-start">
          <span className="lg:text-xl font-semibold">{name}</span>
          <span className="lg:text-xl text-gray-600">₹{price.toFixed(2)}</span>
        </div>
        <div className="flex gap-2">
          <ArrowUpRight onClick={onClick} />
          <Share2Icon />
        </div>
      </div>
    </CardFooter>
  </Card>
);
