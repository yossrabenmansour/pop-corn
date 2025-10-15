
function Movie({movie , onSelectMovie}) {
    return (
         <div className="movie-Card" onClick={()=>onSelectMovie(movie.imdbID)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <div className="movie-card-info">
            <h3>{movie.Title}</h3>
            <p>
              <span>📅</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </div>
    )
}

export default Movie
