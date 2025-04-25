"use client";
import ModelLayout from "../modelLayout";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/custom/CustomCard";

export default function Page() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPant, setSelectedPant] = useState(null);

  useEffect(() => {
    const networkCall = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/pants`
      );
      const response = await data.json();
      setData(response);
    };
    networkCall();
  }, []);

  const handleCardClick = (pant) => {
    setSelectedPant(pant);
    setOpen(true);
  };

  return (
    <div className="flex w-full justify-center px-10">
      <div className="w-full max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-items-center">
          {data.map((pant, index) => (
            <CustomCard
              key={index}
              onClick={() => handleCardClick(pant)}
              name={pant.name}
              price={pant.price}
              image={pant.image}
            />
          ))}
        </div>
      </div>
      {open && selectedPant && (
        <ModelLayout
          isOpen={open}
          setOpen={setOpen}
          name={selectedPant.name}
          price={selectedPant.price}
          image={selectedPant.image}
          desc={selectedPant.desc}
        />
      )}
    </div>
  );
}
