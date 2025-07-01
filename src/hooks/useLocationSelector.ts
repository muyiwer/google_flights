import { searchAirport } from "@/api";
import { useSearchStore } from "@/store";
import { useCallback, useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

export const useLocationSelector = () => {
  const { setFlightLocation, flightLocations, setSearchParams } =
    useSearchStore();
  const [input, setInput] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce(async (value: string) => {
        if (value.trim()) {
          try {
            const results = await searchAirport(value);
            setFlightLocation(results);
          } catch (error) {
            console.error("Failed to search airports", error);
            setFlightLocation([]);
          }
        } else {
          setFlightLocation([]);
        }
      }, 500),
    [setFlightLocation]
  );

  const handleInputChange = useCallback(
    (value: string) => {
      setInput(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return { handleInputChange, flightLocations, setSearchParams, input };
};
