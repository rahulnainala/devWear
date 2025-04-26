import { Skeleton } from "@/components/ui/skeleton";

export const CustomCardSkeleton = () => (
  <div className="w-full h-[300px] cursor-pointer shadow-md rounded-lg overflow-hidden border border-gray-100 flex flex-col">
    <div className="h-[70%] w-full relative">
      <Skeleton className="w-full h-full rounded-none" />
    </div>
    <div className="h-[30%] p-4 flex flex-col justify-between">
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4 rounded-sm" />
        <Skeleton className="h-4 w-1/3 rounded-sm" />
      </div>
      <div className="flex justify-end gap-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  </div>
);
