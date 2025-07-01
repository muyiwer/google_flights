"use client";

import { useSearchForm } from "@/hooks";
import { useSearchStore } from "@/store";
import * as Tabs from "@radix-ui/react-tabs";
import { Info } from "lucide-react";
import { useCallback } from "react";

interface FlightsTabsProps {
  children: React.ReactNode;
}

export default function FlightsTabs({ children }: FlightsTabsProps) {
  const { setSearchParams, searchParams } = useSearchStore();
  const { refetch } = useSearchForm();

  const handleTabChange = useCallback(
    (value: string) => {
      setSearchParams({ sortBy: value });
      setTimeout(() => {
        refetch();
      }, 10);    
    },
    [setSearchParams]
  );

  return (
    <div className="mt-5">
      <Tabs.Root
        defaultValue={searchParams.sortBy}
        onValueChange={(value) => handleTabChange(value)}
        className="w-full max-md:w-full"
      >
        <Tabs.List
          aria-label="Flight sorting tabs"
          className="flex gap-2 bg-white border border-gray-300"
        >
          <Tabs.Trigger
            value="best"
            className="flex-1 inline-flex items-center justify-center gap-1 h-11  text-sm font-medium text-gray-700 bg-white  border-none hover:bg-gray-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:border-blue-600 focus:outline-none"
          >
            Best
            <Info className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer" />
          </Tabs.Trigger>

          <Tabs.Trigger
            value="fastest"
            className="flex-1 inline-flex items-center justify-center h-11 gap-1 px-4 py-2 text-sm font-medium text-gray-700 border-none bg-white border  hover:bg-gray-50 data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700 data-[state=active]:border-yellow-600 focus:outline-none"
          >
            Fastest
            <Info className="w-4 h-4 text-gray-400 hover:text-yellow-600 cursor-pointer" />
          </Tabs.Trigger>
        </Tabs.List>
        {children}
      </Tabs.Root>
    </div>
  );
}
