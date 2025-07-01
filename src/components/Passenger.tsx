"use client";

import { useSearchStore } from "@/store";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Text } from "@radix-ui/themes";
import { ChevronDown, User, Plus, Minus, Info } from "lucide-react";
import { useState } from "react";

export const Passenger = () => {
  const { searchParams, setSearchParams } = useSearchStore();
  const [open, setOpen] = useState(false);

  const [localAdults, setLocalAdults] = useState(searchParams.adults);
  const [localChildren, setLocalChildren] = useState(searchParams.childrens);
  const [localInfants, setLocalInfants] = useState(searchParams.infants);

  const totalPassengers = localAdults + localChildren + localInfants;
  const isInvalid = localInfants > localAdults;

  const handleCountChange = (
    type: "adults" | "children" | "infants",
    delta: number
  ) => {
    const update = (value: number) => Math.max(0, value + delta);
    if (type === "adults") setLocalAdults(update(localAdults));
    if (type === "children") setLocalChildren(update(localChildren));
    if (type === "infants") setLocalInfants(update(localInfants));
  };

  const handleCancel = () => {
    setLocalAdults(searchParams.adults);
    setLocalChildren(searchParams.childrens);
    setLocalInfants(searchParams.infants);
    setOpen(false);
  };

  const handleDone = () => {
    setSearchParams({
      adults: localAdults,
      childrens: localChildren,
      infants: localInfants,
    });
    setOpen(false);
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 rounded hover:bg-gray-100 flex items-center gap-2">
          <User className="w-5 h-4" />
          <Text className="text-[0.8rem]">{totalPassengers}</Text>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="min-w-[220px] p-2 bg-white rounded-md shadow-md w-[200px]"
        align="start"
      >
        {/* Adults */}
        <div className="flex justify-between items-center px-3 py-2">
          <span className={`font-medium ${isInvalid ? "text-red-600" : ""}`}>
            Adults
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleCountChange("adults", -1)}
              className="bg-[#9a9ea5] w-7 h-7 rounded-sm flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-white" />
            </button>
            <span>{localAdults}</span>
            <button
              onClick={() => handleCountChange("adults", 1)}
              className="bg-[#9a9ea5] w-7 h-7 rounded-sm flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Children */}
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex flex-col">
            <span>Children</span>
            <span className="text-[0.7rem] -mt-1">Aged 2-12</span>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleCountChange("children", -1)}
              className="bg-[#9a9ea5] w-7 h-7 rounded-sm flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-white" />
            </button>
            <span>{localChildren}</span>
            <button
              onClick={() => handleCountChange("children", 1)}
              className="bg-[#9a9ea5] w-7 h-7 rounded-sm flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Infants */}
        <div className="flex justify-between items-center px-3 py-2">
          <div className="flex flex-col">
            <span className={`${isInvalid ? "text-red-600" : ""}`}>
              Infants
            </span>
            <span className="text-[0.7rem] -mt-1">Under 2 yrs</span>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => handleCountChange("infants", -1)}
              className="bg-[#9a9ea5] w-7 h-7 rounded-sm flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-white" />
            </button>
            <span>{localInfants}</span>
            <button
              onClick={() => handleCountChange("infants", 1)}
              className="bg-[#9a9ea5] w-7 h-7 rounded-sm flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Error */}
        {isInvalid && (
          <div className="flex gap-2 items-center px-3 py-2 text-red-600 text-[0.75rem]">
            <Info className="w-4 h-4" />
            <span>You must have at least one adult per infant.</span>
          </div>
        )}

        {/* Buttons */}
        {!isInvalid && (
          <div className="flex justify-between mt-3 px-3">
            <button
              onClick={handleCancel}
              className="text-[0.9rem] text-blue-600 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleDone}
              className="text-[0.9rem] text-blue-600 font-medium"
            >
              Done
            </button>
          </div>
        )}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
