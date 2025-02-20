import { useQuery } from "@tanstack/react-query";
import{ AxiosRequestConfig } from "axios";
import apiClient from '../services/api-client';

interface GridResponse<T> {
  count: number;
  results: T[];
}

export const UseData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies: unknown[] = []
) => {
  const fetchingData = async (): Promise<T[]> => {
    const response = await apiClient.get<GridResponse<T>>(endpoint, {
      ...requestConfig,
    });
    return response.data.results || [];
  };

  return useQuery<T[], Error>({
    queryKey: [endpoint, ...dependencies],
    queryFn: fetchingData,
    refetchOnWindowFocus: false,
  });
};