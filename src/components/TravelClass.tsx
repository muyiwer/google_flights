import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Text } from "@radix-ui/themes";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Check } from "lucide-react";
import { useSearchStore } from "@/store";

const cabinClassLabels: Record<string, string> = {
  economy: "Economy",
  premium_economy: "Premium Economy",
  business: "Business",
  first: "First",
};

export const TravelClass = () => {
  const { setSearchParams, searchParams } = useSearchStore();
  const selectedCabinClass = searchParams?.cabinClass ?? "economy";
  const readableLabel = cabinClassLabels[selectedCabinClass] ?? "Economy";

  const cabinClassOptions = [
    { value: "economy", label: "Economy" },
    { value: "premium_economy", label: "Premium Economy" },
    { value: "business", label: "Business" },
    { value: "first", label: "First" },
  ];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2 rounded hover:bg-gray-100 flex items-center gap-2">
          <Text className="text-[0.8rem]">{readableLabel}</Text>
          <TriangleDownIcon />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="min-w-[200px] p-2 bg-white rounded-md shadow-md">
        {cabinClassOptions.map((option) => (
          <DropdownMenu.Item
            key={option.value}
            onClick={() => setSearchParams({ cabinClass: option.value })}
            className="grid grid-cols-[30px_1fr] w-full px-3 py-2 rounded hover:bg-gray-100 cursor-pointer"
          >
            {selectedCabinClass === option.value ? (
              <Check className="h-4 w-4 text-black" />
            ) : (
              <span className="w-4 h-4" /> // placeholder for alignment
            )}
            <span>{option.label}</span>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
