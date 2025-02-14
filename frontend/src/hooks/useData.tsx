import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";

export interface GridResponse<T> {
  count: number;
  results: T[];
}
export const useData = <T,>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    axiosClient.get<GridResponse<T>>(endpoint).then(
      (response) => {
        setData(response.data.results);
        console.log(response.data);
        setisLoading(false);
      },
      (error) => {
        if (error instanceof AbortController) return;
        setError(error.message);
        setisLoading(false);
      }
    );

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
