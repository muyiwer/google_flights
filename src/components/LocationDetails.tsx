import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, MapPin, Plane } from "lucide-react";
import { FlightLocation } from "@/types";

type Props = {
  location: FlightLocation;
  onSelect: (location: FlightLocation) => void;
};

export const LocationDetails = ({ location, onSelect }: Props) => {
  return (
    <Accordion.Root type="single" collapsible className="w-full divide-y">
      <Accordion.Item
        key={location.skyId}
        value={location.skyId}
        className="overflow-hidden"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger asChild>
            <div className="group flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between w-full items-center">
                {/* Main clickable area that triggers onSelect */}
                <div
                  onClick={() => onSelect(location)}
                  className="flex items-center gap-2 flex-grow"
                >
                  <MapPin className="h-5 w-5" />
                  <div className="flex flex-col">
                    <span className="text-[0.9rem] font-semibold">
                      {location.presentation.title}
                    </span>
                    <span className="text-[0.8rem]">
                      {location.presentation.subtitle}
                    </span>
                  </div>
                </div>

                {/* Chevron toggle - don't trigger onSelect here */}
                <div className="flex-shrink-0">
                  <ChevronDown
                    className="h-5 w-5 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </div>
              </div>
            </div>
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="px-4 pb-4 pt-2 text-sm text-gray-700 bg-gray-50">
          <div
            onClick={() => onSelect(location)}
            className="flex items-center gap-2 px-7 cursor-pointer"
          >
            <Plane className="h-5 w-5" />
            <div className="flex flex-col">
              <span className="text-[0.9rem] font-semibold">
                {location.navigation.localizedName} International Airport
              </span>
              <span className="text-[0.8rem]">~68 Km to destination</span>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
