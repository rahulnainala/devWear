"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductDescription } from "@/components/custom/ProductDescription";
import { ProductDescriptionSkeleton } from "@/components/skeletons/ProductDescriptionSkeleton";

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/productDescription/${params.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Unable to load Data", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  if (loading) {
    return <ProductDescriptionSkeleton />;
  }

  if (!data) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Product not found or failed to load</p>
      </div>
    );
  }

  return (
    <div>
      <ProductDescription product={data} />
    </div>
  );
}
