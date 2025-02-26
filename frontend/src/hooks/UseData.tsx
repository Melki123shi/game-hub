import { useQuery } from "@tanstack/react-query";
import{ AxiosRequestConfig } from "axios";
import apiClient from '../services/api-client';

export interface GridResponse<T> {
  count: number;
  results: T[];
}

export const UseData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies: unknown[] = []
) => {
  const fetchingData = (): Promise<T[]> => 
    apiClient.get<GridResponse<T>>(endpoint, {
      ...requestConfig,
    }).then((response) => response.data.results || []);

  return useQuery<T[], Error>({
    queryKey: [endpoint, ...dependencies],
    queryFn: fetchingData,
    refetchOnWindowFocus: false,
    staleTime: 10 * 1000,
  });
};