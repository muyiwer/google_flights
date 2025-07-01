import * as Popover from "@radix-ui/react-popover";
import { useCallback, useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { LocationDetails } from "./LocationDetails";
import { FlightLocation } from "@/types";
import { useLocationSelector } from "@/hooks";

export function LocationSelector({
  placeholder,
  selected,
  onChange,
  type,
}: {
  placeholder: string;
  selected: string;
  type: "origin" | "destination";
  onChange: (value: string) => void;
}) {
  const { setSearchParams, flightLocations, handleInputChange, input } = useLocationSelector();
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleSelect = useCallback(
    (location: FlightLocation) => {
      const updates = {
        ...(type === "origin"
          ? {
              originEntityId: location.entityId,
              originSkyId: location.skyId,
            }
          : {
              destinationEntityId: location.entityId,
              destinationSkyId: location.skyId,
            }),
      };

      setSearchParams(updates);
      onChange(location.presentation.title);
      closeRef.current?.click();
    },
    [type]
  );

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center w-[30rem] max-md:!w-[10rem] p-3 border rounded-lg shadow-sm text-left bg-white hover:bg-gray-50">
          <MapPin className="mx-2 text-gray-400" size={20} />
          <span className="flex-1 truncate">
            {selected ? (
              selected
            ) : (
              <span className="text-gray-400">{placeholder}</span>
            )}
          </span>
          <ChevronDown size={18} className="text-gray-400 mr-2" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="bg-white font-sans rounded-xl shadow-lg w-[25rem] max-md:!w-[15rem] z-40 -mt-[4rem]"
          sideOffset={8}
        >
          <input
            className="w-full max-md:!w-[15rem] px-3 py-2"
            placeholder={placeholder}
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
          />

          <div className="flex flex-col">
            {flightLocations.map((location) => (
              <LocationDetails location={location} onSelect={handleSelect} />
            ))}
          </div>

          <Popover.Close asChild>
            <button ref={closeRef} className="hidden" aria-hidden />
          </Popover.Close>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
