"use client";
import ModelLayout from "../modelLayout";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/custom/CustomCard";

export default function Page() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedShirt, setSelectedShirt] = useState(null);

  useEffect(() => {
    const networkCall = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/shirts`
      );
      const response = await data.json();
      setData(response);
    };
    networkCall();
  }, []);

  const handleCardClick = (pant) => {
    setSelectedShirt(pant);
    setOpen(true);
  };

  return (
    <div className="flex w-full justify-center px-10">
      <div className="w-full max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-items-center">
          {data.map((shirt, index) => (
            <CustomCard
              key={index}
              onClick={() => handleCardClick(shirt)}
              name={shirt.name}
              price={shirt.price}
              image={shirt.image}
            />
          ))}
        </div>
      </div>
      {open && selectedShirt && (
        <ModelLayout
          isOpen={open}
          setOpen={setOpen}
          name={selectedShirt.name}
          price={selectedShirt.price}
          image={selectedShirt.image}
          desc={selectedShirt.desc}
        />
      )}
    </div>
  );
}
