import React from "react";
import "./PhoneticTranscription.css";
import { AiFillSound } from "react-icons/ai";

export default function PhoneticTranscription(props) {
  console.log(props.phonetic);
  return (
    <div className="PhoneticTranscription">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <AiFillSound className="soundIcon" />
      </a>
      {props.phonetic.text}
    </div>
  );
}
