import { useSearchStore } from "../store/searchStore";
import FlightsTabs from "./FlightsTabs";
import { Tabs } from "radix-ui";
import { Text } from "@radix-ui/themes";
import FlightsAccordion from "./FlightsAccordion";
import { Loader } from "lucide-react";

const FlightResults = () => {
  const {  loadingFlights } = useSearchStore();

  if (loadingFlights)
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center">
          <Loader className="animate-spin h-8 w-8 text-blue-600" />
          <Text className="mt-2 text-sm text-gray-600">
            Searching for flights...
          </Text>
        </div>
      </div>
    );


  return (
    <div className="mx-auto flex  mt-5">
      <FlightsTabs>
        <div className="mt-3 flex flex-col">
          <Text className="font-bold">Departing Flights</Text>
          <Text className="text-[0.8rem]">
            Prices include required taxes + fees for 1 adult. Optional charges
            and bag fees may apply. Passenger assistance info.
          </Text>
        </div>
        <Tabs.Content value="best" className="mt-4 text-sm text-gray-800">
          <FlightsAccordion />
        </Tabs.Content>
        <Tabs.Content value="cheapest" className="mt-4 text-sm text-gray-800">
          <FlightsAccordion />
        </Tabs.Content>
      </FlightsTabs>
    </div>
  );
};

export default FlightResults;
