import Movie from "./Movie";

function MovieList({movies , onSelectMovie}) {

  return (
    <div className="movie-list-container">
      {movies.map((ele) => (
       <Movie movie={ele} key={ele.imdbID} onSelectMovie={onSelectMovie} />
      )) }
    </div>
  );
}

export default MovieList;
