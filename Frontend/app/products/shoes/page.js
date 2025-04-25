"use client";
import { useState } from "react";
import shoeData from "./shoeData.json";
import ModelLayout from "../modelLayout";
import { CustomCard } from "@/components/custom/CustomCard";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full justify-center px-10">
      <div className="w-full max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-items-center">
          {shoeData.map((shoe, index) => (
            <>
              <CustomCard
                key={index}
                onClick={() => setOpen(true)}
                name={shoe.name}
                price={shoe.price}
                image={shoe.image}
              />
              <ModelLayout
                isOpen={open}
                setOpen={setOpen}
                name={shoe.name}
                price={shoe.price}
                image={shoe.image}
                desc={shoe.desc}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
