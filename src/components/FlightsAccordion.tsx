import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Circle, Dot } from "lucide-react";
import { format } from "date-fns";
import { useSearchStore } from "@/store";

export default function FlightsAccordion() {
  const { searchParams, searchedFlights } = useSearchStore();
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="w-full divide-y border rounded-md"
    >
      {searchedFlights.map((flight) => {
        const leg = flight.legs[0];
        const segment = leg.segments[0];
        const logo = leg.carriers.marketing[0].logoUrl;
        const airline = leg.carriers.marketing[0].name;
        const departureTime = format(new Date(leg.departure), "h:mm a");
        const arrivalTime = format(new Date(leg.arrival), "h:mm a");

        return (
          <Accordion.Item
            key={flight.id}
            value={flight.id}
            className="overflow-hidden"
          >
            <Accordion.Header className="flex">
              <Accordion.Trigger className="group flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50 focus:outline-none">
                <div className="flex gap-3 items-center">
                  <img src={logo} alt={`${airline} logo`} className="h-8 w-8" />
                  <div className="flex flex-col">
                    <div className="flex gap-1 font-semibold text-[1.1rem]">
                      <span>{departureTime}</span>
                      <span>-</span>
                      <span>{arrivalTime}</span>
                    </div>
                    <span className="text-[0.9rem] font-light">{airline}</span>
                  </div>
                </div>
                <div className="flex items-center gap-7">
                  <div className="flex flex-col max-md:hidden">
                    <span className="font-semibold text-[1.1rem] max-md:text-[0.9rem]">
                      {Math.floor(leg.durationInMinutes / 60)} hr{" "}
                      {leg.durationInMinutes % 60} min
                    </span>
                    <span className="font-light">
                      {leg.origin.displayCode}-{leg.destination.displayCode}
                    </span>
                  </div>
                  <span className="text-[1.1rem] max-md:hidden">
                    {leg.stopCount === 0 ? "Nonstop" : `${leg.stopCount} stop`}
                  </span>
                  <div className="flex flex-col max-md:hidden">
                    <span className="font-semibold text-[1.1rem] max-md:text-[0.9rem]">
                      {flight?.eco?.ecoContenderDelta?.toFixed(0)}KG CO2e
                    </span>
                    <span className="text-[0.9rem]">
                      +{flight?.eco?.ecoContenderDelta?.toFixed(0)}% emissions
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-[1.1rem]">
                      {flight.price.formatted}
                    </span>
                    <span className="text-[0.9rem] font-light">round trip</span>
                  </div>
                  <ChevronDown
                    className="h-5 w-5 text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content className="px-4 pb-4 pt-2 bg-gray-50">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center text-[1rem] font-semibold">
                    <Circle className="h-3 w-3" />
                    <span className="ml-3">
                      {format(new Date(segment.departure), "h:mm a")}
                    </span>
                    <Dot className="w-4 h-4" />
                    <span>
                      {segment.origin.name} ({segment.origin.displayCode})
                    </span>
                  </div>
                  <div className="flex items-center gap-4 px-[5px]">
                    <div className="h-[40px] border-dashed border" />
                    <span>
                      Travel time: {Math.floor(segment.durationInMinutes / 60)}{" "}
                      hr {segment.durationInMinutes % 60} min
                    </span>
                  </div>
                  <div className="flex items-center text-[1rem] font-semibold">
                    <Circle className="h-3 w-3" />
                    <span className="ml-3">
                      {format(new Date(segment.arrival), "h:mm a")}
                    </span>
                    <Dot className="w-4 h-4" />
                    <span>
                      {segment.destination.name} (
                      {segment.destination.displayCode})
                    </span>
                  </div>
                  <div className="flex px-3 mt-2 text-[0.85rem]">
                    <span className="ml-3">
                      {segment.marketingCarrier.name}
                    </span>
                    <Dot className="w-4 h-4" />
                    <span>{searchParams.cabinClass}</span>
                    <Dot className="w-4 h-4" />
                    <span>Boeing 737</span>
                    <Dot className="w-4 h-4" />
                    <span>
                      {segment.marketingCarrier.displayCode}{" "}
                      {segment.flightNumber}
                    </span>
                  </div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
