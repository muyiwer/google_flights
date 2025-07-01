import axios from "axios";
import {
  SearchParams,
  FlightSearchResponse,
  FlightLocation,
  AirportSearchResponse,
  Itinerary,
} from "../types";

const API_KEY = import.meta.env.VITE_SKY_SCRAPPER_API_KEY;
const API_HOST = import.meta.env.VITE_SKY_SCRAPPER_API_HOST;

const api = axios.create({
  baseURL: import.meta.env.VITE_SKY_SCRAPPER_BASE_URL,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
});

export const searchFlights = async (
  params: SearchParams
): Promise<Itinerary[]> => {
  try {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== undefined)
    );
    const response = await api.get<FlightSearchResponse>(
      "/v2/flights/searchFlights",
      {
        params: filteredParams,
      }
    );
    if (!response.data.status) {
      throw new Error("Airport search failed");
    }
    console.log("first", response.data?.data?.itineraries)
    return response.data?.data?.itineraries ?? [];
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const searchAirport = async (
  query: string
): Promise<FlightLocation[]> => {
  try {
    const response = await api.get<AirportSearchResponse>(
      "/v1/flights/searchAirport",
      {
        params: {
          query,
          locale: "en-US",
        },
      }
    );

    if (!response.data.status) {
      throw new Error("Airport search failed");
    }

    return response.data.data;
  } catch (error) {
    console.error("Error searching airport:", error);
    throw error;
  }
};
