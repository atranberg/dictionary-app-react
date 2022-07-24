import React from "react";
import Meaning from "./Meaning";
import PhoneticTranscription from "./PhoneticTranscription";
import "./Result.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <section className="Phonetics">
          <div className="Word">
            <h2>{props.result.word}</h2>
          </div>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <PhoneticTranscription phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <section className="Definition">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
