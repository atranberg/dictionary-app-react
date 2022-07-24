import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>Open source code by Anna Tranberg</p>
      <div className="ConnectionLinks">
        <a href="mailto:aec.tranberg@gmail.com" rel="noreferrer">
          <FaEnvelope className="ConnectIcon" />
        </a>
        <a
          href="https://www.linkedin.com/in/anna-tranberg/"
          target="_blank"
          title="LinkedIn profile"
          rel="noreferrer"
        >
          <FaLinkedin className="ConnectIcon" />
        </a>
        <a
          href="https://github.com/atranberg"
          target="_blank"
          title="GitHub profile"
          rel="noreferrer"
        >
          <FaGithub className="ConnectIcon" />
        </a>
      </div>
    </div>
  );
}
