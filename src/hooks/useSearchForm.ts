import { searchFlights } from "@/api";
import { useSearchStore } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

export const useSearchForm = () => {
  const { searchParams, setSearchedFlights, setLoadingFlights } =
    useSearchStore();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const hasFetchedRef = useRef(false);

  const { refetch, isFetching, data } = useQuery({
    queryKey: ["flights", searchParams],
    queryFn: () => searchFlights(searchParams),
    enabled: false,
    retry: false,
  });

  const handleSubmit = () => {
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      refetch().finally(() => {
        hasFetchedRef.current = false;
      });
    }
  };

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setSearchedFlights(data);
    }
  }, [data]);

  useEffect(() => {
    setLoadingFlights(isFetching);
  }, [isFetching]);

  return {
    searchParams,
    handleSubmit,
    isLoading: isFetching,
    to,
    from,
    setFrom,
    setTo,
    refetch
  };
};
