"use client";
import ModelLayout from "../modelLayout";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/custom/CustomCard";

export default function Page() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedtshirt, setSelectedTshirt] = useState(null);

  useEffect(() => {
    const networkCall = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/tshirts`
      );
      const response = await data.json();
      setData(response);
    };
    networkCall();
  }, []);

  const handleCardClick = (tshirt) => {
    setSelectedTshirt(tshirt);
    setOpen(true);
  };

  return (
    <div className="flex w-full justify-center px-10">
      <div className="w-full max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-items-center">
          {data.map((tshirt, index) => (
            <CustomCard
              key={index}
              onClick={() => handleCardClick(tshirt)}
              name={tshirt.name}
              price={tshirt.price}
              image={tshirt.image}
            />
          ))}
        </div>
      </div>
      {open && selectedtshirt && (
        <ModelLayout
          isOpen={open}
          setOpen={setOpen}
          name={selectedtshirt.name}
          price={selectedtshirt.price}
          image={selectedtshirt.image}
          desc={selectedtshirt.desc}
        />
      )}
    </div>
  );
}
