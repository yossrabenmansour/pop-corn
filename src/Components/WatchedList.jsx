import WatchedMovie from "./WatchedMovie"

function WatchedList({watched ,  onDeleteWatched }) {
    return (
        <div className="watched-container"> 
            {watched.map((ele)=>
            <WatchedMovie movie={ele} key={ele.imdbID} onDeleteWatched={onDeleteWatched} />
            )}
        </div>
    )
}

export default WatchedList
