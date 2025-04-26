import Link from "next/link";
import { Image } from "@heroui/image";
import { Button } from "@/components/ui/button";
import { Modal, ModalContent } from "@heroui/modal";
import { ArrowUpRight, ShoppingCart } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ModelLayout = ({ isOpen, setOpen, name, price, image, desc, id }) => {
  console.log("tttt", id);
  return (
    <Modal
      isOpen={isOpen}
      placement="center"
      onClose={() => setOpen(false)}
      backdrop="blur"
      classNames={{
        body: "py-6",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        header: "border-b-[1px] border-[#292f46]",
        footer: "border-t-[1px] border-[#292f46]",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}
    >
      <ModalContent className="rounded-2xl bg-background shadow-xl p-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              alt={name}
              className="transition-transform duration-300 hover:scale-105"
              radius="lg"
              shadow="sm"
              src={image}
              width="100%"
              style={{ transition: "opacity 0.5s ease-in-out" }}
            />
          </div>
          <div className="space-y-6 space-x-2 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              {name}
            </h2>
            <p className="text-gray-600 text-base">{desc}</p>
            <div className="text-xl text-gray-800 font-semibold">
              ₹{price.toFixed(2)}
            </div>
            <div className="flex flex-row gap-3">
              <Link href={`/products/productDescription/${id}`}>
                <Button className="font-medium py-3 px-8 rounded-sm duration-300 hover:cursor-pointer border-1 border-gray-300">
                  <ArrowUpRight />
                  Product Description
                </Button>
              </Link>
              <div>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button
                      variant="secondary"
                      className="font-medium py-3 px-8 rounded-sm duration-300 hover:cursor-pointer border-1 border-gray-300"
                    >
                      <ShoppingCart /> Add to Cart
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Working on It</AlertDialogTitle>
                      <AlertDialogDescription>
                        This functionality needs a full overhaul
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-black text-white">
                        Close
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModelLayout;
