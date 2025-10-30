import { useEffect, useState } from "react";

export function useMovie(query) {
    const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
      const myKey = "18473d00";
     useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${myKey}&s=${query}`,

            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("internet problem");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found!");

          setMovies(data.Search);
          console.log(data.Search);
        } catch (err) {
          if (err.name === "AortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
      }
      fetchMovie();
      // / clean up function
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return {
    movies , isLoading , error
  }
}