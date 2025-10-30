import { useEffect, useRef, useState } from "react";
import StarRating from "../StarRating";
import Loader from "./Loader";
const myKey = "18473d00";

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) {
      countRef.current++;
    }
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Released: released,
    Runtime: runtime,
    Plot: plot,
    Poster: poster,
    Actors: actors,
    Director: director,
    imdbRating,
    Genre: genre,
    Year: year,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
      userRatingDecision: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
          console.log("closed ");
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function fetchMovieDetails() {
        setLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${myKey}&i=${selectedId}`
        );
        const data = await res.json();
        // console.log(data);
        setMovie(data);
        setLoading(false);
      }
      fetchMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `${title}`;
      // clean up function
      return function () {
        document.title = "UsePopCorn";
        // console.log(`clean up movie ${title}`);
      };
    },
    [title]
  );

  return (
    <div className="movie-details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <span className="btn-back" onClick={onCloseMovie}>
            ⬅️
          </span>
          <header>
            <img src={poster} alt={`poster of ${title}`} />
            <div className="details-overview">
              <h3>{title}</h3>
              <p>
                {released} :: {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section className="footer-details">
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={27}
                    onSetRate={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add-watched" onClick={handleAdd}>
                      + Add to list{" "}
                    </button>
                  )}
                </>
              ) : (
                <p>
                  ✅ You’ve already rated this movie with {watchedUserRating}⭐{" "}
                </p>
              )}
            </div>
            <p className="plot">
              <strong>{plot}</strong>
            </p>
            <p className="staring">
              <strong>Stars </strong>: {actors}
            </p>
            <p>
              <strong>Directed by </strong>: {director}
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
