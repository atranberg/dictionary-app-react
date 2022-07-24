import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photos from "./Photos";
import "./Dictionary.css";
import { FaBookOpen } from "react-icons/fa";

export default function Dictionary(props) {
  let [searchword, setSearchword] = useState(props.defaultSearchword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001b94744ab1a1d4d4b8246eb2cbd2974ed";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchwordChange(event) {
    setSearchword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="Header">
          <h1>DICTIONARY</h1>
          <FaBookOpen className="Icon" />
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleSearchwordChange}
              defaultValue={props.defaultSearchword}
            />
          </form>
        </section>
        <Result result={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
