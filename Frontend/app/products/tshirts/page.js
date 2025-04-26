"use client";
import ModelLayout from "../modelLayout";
import { useState, useEffect } from "react";
import { CustomCard } from "@/components/custom/CustomCard";
import { CustomCardSkeleton } from "@/components/skeletons/CustomCardSkeleton";

export default function Page() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedtshirt, setSelectedTshirt] = useState(null);

  useEffect(() => {
    const networkCall = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/tshirts`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
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
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-4 sm:gap-1 lg:py-10 md:py-5 sm:py-5  justify-items-center">
          {loading
            ? [...Array(6)].map((_, index) => (
                <CustomCardSkeleton key={`skeleton -${index}`} />
              ))
            : data.map((tshirt, index) => (
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
          id={selectedtshirt._id}
          name={selectedtshirt.name}
          price={selectedtshirt.price}
          image={selectedtshirt.image}
          desc={selectedtshirt.desc}
        />
      )}
    </div>
  );
}
