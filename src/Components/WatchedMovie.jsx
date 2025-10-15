
function WatchedMovie({movie ,  onDeleteWatched}) {
 
    return (
        <div className="watched-card">

          <img src={movie.poster} alt={`${movie.title} poster`} />  
          
          <div className="watched-list-container">
            <h2>{movie.title}</h2>
            <div className="watched-list">
         <p>
            <span>⭐</span>
            <span>{(movie.userRating)}</span>
         </p>
         <p>
            <span>⭐</span>
            <span>{movie.imdbRating}</span>
         </p>
         <p>
            <span>⏳</span>
            <span>{movie.runtime} <strong>min</strong> </span>
         </p>
         <button className="btn-delete" onClick={()=>onDeleteWatched(movie.imdbID)}>❌</button>
         </div>
         </div>
        </div>
    )
}

export default WatchedMovie
