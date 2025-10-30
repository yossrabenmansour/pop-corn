import { useEffect, useState } from "react";

 export function useLocalStorage(initialvalue , key) {

    const [watched, setWatched] = useState(
        function(){
          const storedMovies=localStorage.getItem(key)
          return JSON.parse(storedMovies)
        }
      );
     useEffect(function(){
     localStorage.setItem( key, JSON.stringify(watched))
  },[watched , setWatched , key])

  return [watched,setWatched]
}

