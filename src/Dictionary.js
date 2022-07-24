import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";
import { FaBookOpen } from "react-icons/fa";

export default function Dictionary(props) {
  let [searchword, setSearchword] = useState(props.defaultSearchword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchword}`;
    axios.get(apiUrl).then(handleResponse);
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
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
