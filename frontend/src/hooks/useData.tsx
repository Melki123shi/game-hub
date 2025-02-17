import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface GridResponse<T> {
  count: number;
  results: T[];
}
export const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setisLoading(true);
      axiosClient
        .get<GridResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then(
          (response) => {
            setData(response.data.results);
            setisLoading(false);
          },
          (error) => {
            if (error instanceof AbortController) return;
            setError(error.message);
            setisLoading(false);
          }
        );

      return;
      // () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};
