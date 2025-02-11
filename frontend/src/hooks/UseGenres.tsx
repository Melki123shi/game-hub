import { useEffect, useState } from "react";
import axiosClient from "../services/api-client";

export interface GenreGridResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  slug: string;
}
const UseGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axiosClient.get<GenreGridResponse>("/genres").then(
      (response) => {
        setGenres(response.data.results);
        console.log(response.data);
        setLoading(false);
      },
      (error) => {
        if (error instanceof AbortController) return;
        setError(error.message);
        setLoading(false);
      }
    );

    return () => controller.abort();
  }, []);

  return { genres, error, loading };
};

export default UseGenres;
