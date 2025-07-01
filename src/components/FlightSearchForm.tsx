import { Button, Text } from "@radix-ui/themes";
import { LocationSelector } from "./LocationSelector";
import { ArrowLeftRight, Search } from "lucide-react";
import DatePickerPopover from "./DepartureReturnPicker";
import { TripType } from "./TripType";
import { Passenger } from "./Passenger";
import { TravelClass } from "./TravelClass";
import { useSearchForm } from "@/hooks";

const FlightSearchForm = () => {
  const { handleSubmit, isLoading, to, from, setFrom, setTo } = useSearchForm();

  return (
    <div className="mx-auto relative rounded-lg bg-white p-6 shadow-lg mt-[1rem] flex flex-col gap-3">
      <div className="flex gap-3 z-10">
        <TripType />
        <Passenger />
        <TravelClass />
      </div>
      <div className="md:flex gap-4 mb-5 z-0 max-md:grid max-md:grid-cols-1">
        <div className="max-w-xl mx-auto  flex items-center relative gap-2">
          <LocationSelector
            type="origin"
            placeholder="Where from?"
            selected={from}
            onChange={setFrom}
          />
          <div className="rounded-full h-[35px] border-r border-l w-[35px] absolute left-[47%] flex justify-center bg-white items-center">
            <ArrowLeftRight className="w-4 h-4 text-[#3C4043]" />
          </div>
          <LocationSelector
            type="destination"
            placeholder="Where to?"
            selected={to}
            onChange={setTo}
          />
        </div>
        <div className="max-w-xl mx-auto  flex items-center relative">
          <DatePickerPopover
            label="Departure"
            style={{ borderRightWidth: 0 }}
          />
          <div className="border h-7 border-gray-300 right-1/2 left-1/2 absolute" />
          <DatePickerPopover
            label="Return"
            isReturnDate
            style={{ borderLeftWidth: 0 }}
          />
        </div>
      </div>
      <div className="-bottom-4 right-1/2 left-1/2 absolute ">
        <Button
          loading={isLoading}
          className="!rounded-full flex gap-2 items-center !h-[2.5rem] z-10"
          onClick={handleSubmit}
        >
          <Search className="w-4 h-4" />
          <Text>Search</Text>
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
