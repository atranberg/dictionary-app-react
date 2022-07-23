import React from "react";
import Meaning from "./Meaning";
import PhoneticTranscription from "./PhoneticTranscription";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h1>{props.result.word}</h1>
        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <PhoneticTranscription phonetic={phonetic} />
            </div>
          );
        })}
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
