"use client";
import { useState } from "react";
import tshirtData from "./tshirtData.json";
import ModelLayout from "../modelLayout";
import { CustomCard } from "@/components/custom/CustomCard";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex w-full justify-center px-10">
      <div className="w-full max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-items-center">
          {tshirtData.map((tshirt, index) => (
            <>
              <CustomCard
                key={index}
                onClick={() => setOpen(true)}
                name={tshirt.name}
                price={tshirt.price}
                image={tshirt.image}
              />
              <ModelLayout
                isOpen={open}
                setOpen={setOpen}
                name={tshirt.name}
                price={tshirt.price}
                image={tshirt.image}
                desc={tshirt.desc}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
