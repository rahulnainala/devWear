import { Button } from "@/components/ui/button";
import { Modal, ModalContent } from "@heroui/modal";
import { ShoppingCart } from "lucide-react";
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
import { Image } from "@heroui/image";

const ModelLayout = ({ isOpen, setOpen, name, price, image, desc }) => {
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
            />
          </div>
          <div className="space-y-6 space-x-2 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              {name}
            </h2>
            <p className="text-gray-600 text-base">{desc}</p>
            <div className="text-xl text-gray-800 font-semibold">{price}</div>
            <div>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="font-medium py-3 px-8 rounded-full transition-colors duration-300">
                    <ShoppingCart /> Buy Now
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Waiting on MongoDB</AlertDialogTitle>
                    <AlertDialogDescription>
                      This functionality needs Backend Server to be able to
                      start working on this
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModelLayout;
