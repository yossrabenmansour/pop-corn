
function WatchedSummary({watched}) {
    const average = (arr) => arr.reduce((acc, ele) => acc + ele / arr.length, 0);
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) =>  movie.userRating));
  const avgRunTime = average(watched.map((movie) =>Number( movie.runtime)));
  return (
  
    <div className="watched-summary">
      <h2>Movie you watched</h2>
      <div className="summary-info">
        <p>
            
          <span>*️⃣</span>
          <span>{watched.length} movies</span>
        </p>

        <p>
          <span>⭐</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>

        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>

        <p>
          <span>⌛</span>
          <span>
            {avgRunTime} <strong>min</strong>
          </span>
        </p>
      </div>
    </div>
    )
}

export default WatchedSummary
