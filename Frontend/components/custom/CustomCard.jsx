import { Image } from "@heroui/image";
import { ArrowUpRight, Share2Icon } from "lucide-react";
import { Card, CardBody, CardFooter } from "@heroui/card";

export const CustomCard = ({ onClick, name, price, image }) => (
  <Card
    isPressable
    shadow="sm"
    className="w-[350px] h-[350px] cursor-pointer hover:shadow-xl transition-shadow shadow-lg"
    onPress={onClick}
  >
    <CardBody className=" h-full overflow-hidden p-0">
      <Image
        alt={name}
        className="w-full object-cover h-[80%]"
        radius="lg"
        shadow="sm"
        src={image}
        width="100%"
      />
    </CardBody>
    <CardFooter>
      <div className="flex w-full py-3 justify-between items-center">
        <div className="flex flex-col items-start">
          <span className="text-xl font-semibold">{name}</span>
          <span className="text-xl text-gray-600">{price}</span>
        </div>
        <div className="flex gap-2">
          <ArrowUpRight onClick={onClick} />
          <Share2Icon />
        </div>
      </div>
    </CardFooter>
  </Card>
);
