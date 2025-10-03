import WatchedMovie from "./WatchedMovie"

function WatchedList({watched}) {
    return (
        <div className="watched-container"> 
            {watched.map((movie)=>
            <WatchedMovie movie={movie} key={movie.imdbID}/>
            )}
        </div>
    )
}

export default WatchedList
