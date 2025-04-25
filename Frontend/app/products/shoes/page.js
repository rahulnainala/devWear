"use client";
import ModelLayout from "../modelLayout";
import { useEffect, useState } from "react";
import { CustomCard } from "@/components/custom/CustomCard";

export default function Page() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedshoe, setSelectedShoe] = useState(null);

  useEffect(() => {
    const networkCall = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/shoes`
      );
      const response = await data.json();
      setData(response);
    };
    networkCall();
  }, []);

  const handleCardClick = (pant) => {
    setSelectedShoe(pant);
    setOpen(true);
  };

  return (
    <div className="flex w-full justify-center px-10">
      <div className="w-full max-w-[80%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-10 justify-items-center">
          {data.map((shoe, index) => (
            <CustomCard
              key={index}
              onClick={() => handleCardClick(shoe)}
              name={shoe.name}
              price={shoe.price}
              image={shoe.image}
            />
          ))}
        </div>
      </div>
      {open && selectedshoe && (
        <ModelLayout
          isOpen={open}
          setOpen={setOpen}
          name={selectedshoe.name}
          price={selectedshoe.price}
          image={selectedshoe.image}
          desc={selectedshoe.desc}
        />
      )}
    </div>
  );
}
