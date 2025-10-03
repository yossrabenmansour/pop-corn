

function WatchedSummary({watched}) {
    const average = (arr)=> arr.reduce((acc,a)=>acc+a/arr.length ,0 )
    const runtimeAv=average(watched.map((movie)=>movie.runtime))
    const imdbRatingAv=average(watched.map((movie)=>movie.imdbRating))
    const userRatingAv=average(watched.map((movie)=>movie.userRating))
    return (
        <div className="watched-summary">
            <h2>All movies you’ve watched</h2>
            <div className="summary-info">
            <p>
                     <span>*️⃣</span>
                     <span>{watched.length}</span>
            </p>
            <p>
                <span>⭐</span>
                <span>{imdbRatingAv}</span>
            </p>
            <p>
                <span>⭐</span>
                <span>{userRatingAv}</span>
            </p>
            <p>
                <span>⏳</span>
                <span>{runtimeAv}</span>
            </p>
        </div>
        </div>
    )
}

export default WatchedSummary
