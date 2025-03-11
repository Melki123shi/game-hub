import axios, { AxiosRequestConfig } from "axios";

export interface GridResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<GridResponse<T>>(this.endpoint, config)
      .then((res) => res.data.results || []);

  get = (slug: string) =>
    axiosInstance.get<T>(`${this.endpoint}/${slug}`).then((res) => res.data);
}

export default ApiClient;
