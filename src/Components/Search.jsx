import { useEffect, useRef } from "react";

function Search({query ,setQuery}) {
  const inputEl=useRef(null)

   useEffect(function(){
     function callback(e){
      if(e.code==='Enter'){
        inputEl.current.focus()
        setQuery("")
        console.log("test")
      }
     }
     document.addEventListener("keydown", callback)
     
     return ()=> document.removeEventListener("keydown", callback)
   },[setQuery])

  return (
    <div>
      <input
        value={query}
        type="text"
        className="search"
        placeholder="search movies"
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
    </div>
  );
}

export default Search;
