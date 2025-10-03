
function WatchedMovie({movie}) {
    return (
        <div className="watched-card">

          <img src={movie.Poster} alt={`${movie.Title} poster`} />  
          
          <div className="watched-list-container">
            <h2>{movie.Title}</h2>
            <div className="watched-list">
         <p>
            <span>⭐</span>
            <span>{movie.userRating}</span>
         </p>
         <p>
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
         </p>
         <p>
            <span>⏳</span>
            <span>{movie.runtime}</span>
         </p>
         </div>
         </div>
        </div>
    )
}

export default WatchedMovie
