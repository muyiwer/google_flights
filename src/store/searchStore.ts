import { create } from "zustand";
import { FlightLocation, Itinerary, SearchParams } from "../types";

interface SearchState {
  searchParams: SearchParams;
  enableSearch: boolean;
  setSearchParams: (params: Partial<SearchParams>) => void;
  setEnableSearch: (enableSearch: boolean) => void;
  flightLocations: FlightLocation[];
  setFlightLocation: (flightLocations: FlightLocation[]) => void;
  setSearchedFlights: (searchedFlights: Itinerary[]) => void;
  searchedFlights: Itinerary[];
  loadingFlights: boolean;
  setLoadingFlights: (loadingFlights: boolean) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchParams: {
    cabinClass: "economy",
    adults: 1,
    infants: 0,
    childrens: 0,
    tripType: "round-trip",
    market: "en-US",
    currency: "USD",
    limit: 10,
    sortBy: "best",
    countryCode: "US",
    date: new Date().toISOString().slice(0, 10).replace(/-/g, "-"),
    returnDate: new Date().toISOString().slice(0, 10).replace(/-/g, "-"),
  },
  loadingFlights: false,
  enableSearch: false,
  flightLocations: [],
  searchedFlights: [],
  setLoadingFlights: (loadingFlights: boolean) =>
    set(() => ({
      loadingFlights,
    })),
  setSearchedFlights: (searchedFlights: Itinerary[]) =>
    set(() => ({
      searchedFlights,
    })),
  setFlightLocation: (flightLocations: FlightLocation[]) =>
    set(() => ({
      flightLocations,
    })),
  setSearchParams: (params) =>
    set((state) => ({
      searchParams: { ...state.searchParams, ...params },
    })),
  setEnableSearch: (enableSearch: boolean) => set(() => ({ enableSearch })),
}));
