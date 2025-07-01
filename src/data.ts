import type { Itinerary } from "./types"; 

export const airport = {
  status: true,
  timestamp: 1751352744925,
  data: [
    {
      skyId: "LOS",
      entityId: "95673335",
      presentation: {
        title: "Lagos",
        suggestionTitle: "Lagos (LOS)",
        subtitle: "Nigeria",
      },
      navigation: {
        entityId: "95673335",
        entityType: "AIRPORT",
        localizedName: "Lagos",
        relevantFlightParams: {
          skyId: "LOS",
          entityId: "95673335",
          flightPlaceType: "AIRPORT",
          localizedName: "Lagos",
        },
        relevantHotelParams: {
          entityId: "27544119",
          entityType: "CITY",
          localizedName: "Lagos",
        },
      },
    },
    {
      skyId: "ZOS",
      entityId: "95674094",
      presentation: {
        title: "Osorno",
        suggestionTitle: "Osorno (ZOS)",
        subtitle: "Chile",
      },
      navigation: {
        entityId: "95674094",
        entityType: "AIRPORT",
        localizedName: "Osorno",
        relevantFlightParams: {
          skyId: "ZOS",
          entityId: "95674094",
          flightPlaceType: "AIRPORT",
          localizedName: "Osorno",
        },
        relevantHotelParams: {
          entityId: "27537518",
          entityType: "CITY",
          localizedName: "Osorno",
        },
      },
    },
    {
      skyId: "ZAL",
      entityId: "128669214",
      presentation: {
        title: "Valdivia",
        suggestionTitle: "Valdivia (ZAL)",
        subtitle: "Chile",
      },
      navigation: {
        entityId: "128669214",
        entityType: "AIRPORT",
        localizedName: "Valdivia",
        relevantFlightParams: {
          skyId: "ZAL",
          entityId: "128669214",
          flightPlaceType: "AIRPORT",
          localizedName: "Valdivia",
        },
        relevantHotelParams: {
          entityId: "27537477",
          entityType: "CITY",
          localizedName: "Valdivia",
        },
      },
    },
    {
      skyId: "MHC",
      entityId: "154088923",
      presentation: {
        title: "Mocopulli",
        suggestionTitle: "Mocopulli (MHC)",
        subtitle: "Chile",
      },
      navigation: {
        entityId: "154088923",
        entityType: "AIRPORT",
        localizedName: "Mocopulli",
        relevantFlightParams: {
          skyId: "MHC",
          entityId: "154088923",
          flightPlaceType: "AIRPORT",
          localizedName: "Mocopulli",
        },
        relevantHotelParams: {
          entityId: "27547459",
          entityType: "CITY",
          localizedName: "Castro",
        },
      },
    },
  ],
};

const abuja = {
  status: true,
  timestamp: 1751352801142,
  data: [
    {
      skyId: "ABV",
      entityId: "128668198",
      presentation: {
        title: "Abuja",
        suggestionTitle: "Abuja (ABV)",
        subtitle: "Nigeria",
      },
      navigation: {
        entityId: "128668198",
        entityType: "AIRPORT",
        localizedName: "Abuja",
        relevantFlightParams: {
          skyId: "ABV",
          entityId: "128668198",
          flightPlaceType: "AIRPORT",
          localizedName: "Abuja",
        },
        relevantHotelParams: {
          entityId: "39833717",
          entityType: "CITY",
          localizedName: "Abuja",
        },
      },
    },
  ],
};


export const flightData: Itinerary[] = [
  {
    id: "f1",
    price: {
      raw: 232826,
      formatted: "NGN 232,826",
      pricingOptionId: "abc123",
    },
    isSelfTransfer: false,
    isProtectedSelfTransfer: false,
    farePolicy: {
      isChangeAllowed: false,
      isPartiallyChangeable: false,
      isCancellationAllowed: false,
      isPartiallyRefundable: false,
    },
    eco: {
      ecoContenderDelta: 19,
    },
    fareAttributes: {},
    tags: ["nonstop"],
    isMashUp: false,
    hasFlexibleOptions: false,
    score: 0.9,
    legs: [
      {
        id: "leg1",
        origin: {
          id: "LOS",
          entityId: "95673335",
          name: "Lagos",
          displayCode: "LOS",
          city: "Lagos",
          country: "Nigeria",
          isHighlighted: false,
        },
        destination: {
          id: "ABV",
          entityId: "128668198",
          name: "Abuja",
          displayCode: "ABV",
          city: "Abuja",
          country: "Nigeria",
          isHighlighted: false,
        },
        durationInMinutes: 80,
        stopCount: 0,
        isSmallestStops: false,
        departure: "2025-07-17T18:25:00",
        arrival: "2025-07-17T19:45:00",
        timeDeltaInDays: 0,
        carriers: {
          marketing: [
            {
              id: -31079,
              alternateId: "A_",
              logoUrl:
                "https://logos.skyscnr.com/images/airlines/favicon/A_.png",
              name: "Air Peace",
            },
          ],
          operationType: "fully_operated",
        },
        segments: [
          {
            id: "seg1",
            origin: {
              flightPlaceId: "LOS",
              displayCode: "LOS",
              parent: {
                flightPlaceId: "LOSA",
                displayCode: "LOS",
                name: "Lagos",
                type: "City",
              },
              name: "Lagos",
              type: "Airport",
              country: "Nigeria",
            },
            destination: {
              flightPlaceId: "ABV",
              displayCode: "ABV",
              parent: {
                flightPlaceId: "ABVA",
                displayCode: "ABV",
                name: "Abuja",
                type: "City",
              },
              name: "Abuja",
              type: "Airport",
              country: "Nigeria",
            },
            departure: "2025-07-17T18:25:00",
            arrival: "2025-07-17T19:45:00",
            durationInMinutes: 80,
            flightNumber: "7131",
            marketingCarrier: {
              id: -31079,
              name: "Air Peace",
              alternateId: "A_",
              allianceId: 0,
              displayCode: "P4",
              logoUrl: ""
            },
            operatingCarrier: {
              id: -31079,
              name: "Air Peace",
              alternateId: "A_",
              allianceId: 0,
              displayCode: "P4",
              logoUrl: ""
            },
            transportMode: "TRANSPORT_MODE_FLIGHT",
          },
        ],
      },
    ],
  },
];

