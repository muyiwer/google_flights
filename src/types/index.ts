export interface SearchParams {
  originEntityId?: string;
  destinationEntityId?: string;
  date?: string;
  returnDate?: string;
  adults: number;
  childrens: number;
  infants: number;
  tripType: "one-way" | "round-trip";
  cabinClass: string;
  originSkyId?: string;
  destinationSkyId?: string;
  sortBy?: string;
  limit: number;
  currency: string;
  market: string;
  countryCode: string;
}

export interface Flight {
  id: string;
  price: number;
  carrier: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
}

export interface FlightSearchResponse {
  status: boolean;
  timestamp: number;
  data: Data;
}

export interface Data {
  context: Context;
  messages: any[];
  filterStats: {
    duration: {
      min: number;
      max: number;
      multiCityMin: number;
      multiCityMax: number;
    };
    total: number;
    hasCityOpenJaw: boolean;
    multipleCarriers: {
      minPrice: string;
      rawMinPrice: number | null;
    };
    airports: {
      city: string;
      airports: {
        id: string;
        entityId: string;
        name: string;
      }[];
    }[];
    carriers: {
      id: number;
      alternateId: string;
      logoUrl: string;
      name: string;
      minPrice: string;
      allianceId: number;
    }[];
    stopPrices: {
      direct: StopPrice;
      one: StopAvailability;
      twoOrMore: StopAvailability;
    };
    alliances: any[];
  };
  flightsSessionId: string;
  destinationImageUrl: string;
  itineraries: Itinerary[];
}

export interface Context {
  status: string;
  sessionId: string;
  totalResults: number;
}

export interface Itinerary {
  id: string;
  price: {
    raw: number;
    formatted: string;
    pricingOptionId: string;
  };
  legs: FlightLeg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: {
    isChangeAllowed: boolean;
    isPartiallyChangeable: boolean;
    isCancellationAllowed: boolean;
    isPartiallyRefundable: boolean;
  };
  eco: {
    ecoContenderDelta: number;
  };
  fareAttributes: Record<string, unknown>;
  tags: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

export interface FlightLeg {
  id: string;
  origin: LocationInfo;
  destination: LocationInfo;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: {
    marketing: Carrier[];
    operationType: string;
  };
  segments: Segment[];
}

export interface LocationInfo {
  id: string;
  entityId: string;
  name: string;
  displayCode: string;
  city: string;
  country: string;
  isHighlighted: boolean;
}

export interface Carrier {
  id: number;
  alternateId: string;
  logoUrl: string;
  name: string;
}

export interface Segment {
  id: string;
  origin: SegmentPlace;
  destination: SegmentPlace;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: CarrierWithDisplayCode;
  operatingCarrier: CarrierWithDisplayCode;
  transportMode: string;
}

export interface SegmentPlace {
  flightPlaceId: string;
  displayCode: string;
  parent: {
    flightPlaceId: string;
    displayCode: string;
    name: string;
    type: string;
  };
  name: string;
  type: string;
  country: string;
}

export interface CarrierWithDisplayCode extends Carrier {
  allianceId: number;
  displayCode: string;
}

export interface StopPrice {
  isPresent: boolean;
  formattedPrice?: string;
  rawPrice?: number;
}

export interface StopAvailability {
  isPresent: boolean;
}

export interface FlightLocation {
  skyId: string;
  entityId: string;
  presentation: {
    title: string;
    suggestionTitle: string;
    subtitle: string;
  };
  navigation: {
    entityId: string;
    entityType: "AIRPORT" | string;
    localizedName: string;
    relevantFlightParams: {
      skyId: string;
      entityId: string;
      flightPlaceType: "AIRPORT" | string;
      localizedName: string;
    };
    relevantHotelParams: {
      entityId: string;
      entityType: "CITY" | string;
      localizedName: string;
    };
  };
}

export interface AirportSearchResponse {
  status: boolean;
  timestamp: number;
  data: FlightLocation[];
}
