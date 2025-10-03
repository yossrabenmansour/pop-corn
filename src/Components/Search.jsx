import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <input
        value={query}
        type="text"
        className="search"
        placeholder="search movies"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
