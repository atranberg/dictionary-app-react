import React, { useState } from "react";

export default function Dictionary() {
  let [searchword, setSearchword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchword} definition`);
  }

  function handleSearchwordChange(event) {
    setSearchword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchwordChange} />
      </form>
    </div>
  );
}
