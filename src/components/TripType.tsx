import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Text } from "@radix-ui/themes";
import { ArrowLeftRight, ChevronDown, Check, MoveRight } from "lucide-react";
import { useSearchStore } from "@/store/searchStore";

export const TripType = () => {
  const { setSearchParams, searchParams } = useSearchStore();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 rounded hover:bg-gray-100 flex items-center gap-2">
          {searchParams?.tripType === "one-way" ? (
            <MoveRight className="w-4 h-4"/>
          ) : (
            <ArrowLeftRight className="w-4 h-4" />
          )}
          <Text className="text-[0.8rem]">
            {searchParams?.tripType === "one-way" ? "One Way" : "Round Trip"}
          </Text>
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-[200px] p-2 bg-white rounded-md shadow-md">
        <DropdownMenu.Item
          onClick={() => setSearchParams({ tripType: "one-way" })}
          className="grid grid-cols-[30px_1fr] w-full px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
        >
          {searchParams?.tripType === "one-way" ? (
            <Check className="h-4 w-4" />
          ) : (
            <span></span>
          )}
          <span>One Way</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item
          onClick={() => setSearchParams({ tripType: "round-trip" })}
          className="grid grid-cols-[30px_1fr] w-full items-center px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
        >
          {searchParams?.tripType === "round-trip" ? (
            <Check className="h-4 w-4" />
          ) : (
            <span></span>
          )}
          <span>Round Trip</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
