"use client";

import { useState } from "react";

export default function EntryIntro() {
  const [visible, setVisible] = useState(true);
  const [breaking, setBreaking] = useState(false);

  function enterSite() {
    if (breaking) return;

    setBreaking(true);

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }

  if (!visible) return null;

  return (
    <div
      className={`intro-screen ${breaking ? "intro-breaking" : ""}`}
      onClick={enterSite}
    >
      <h1 className="intro-logo">
        STND COMPANY
      </h1>

      <div className="building-container">

        <div className="building building-left" />

        <div className="building building-right" />

        <svg
          className="building-crack"
          viewBox="0 0 100 360"
        >
          <polyline
            points="50,0 42,55 58,105 44,160 57,220 46,285 52,360"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

      </div>

      <p className="intro-click">
        CLIQUE PARA ENTRAR
      </p>
    </div>
  );
}"use client";

import { useState } from "react";

export default function EntryIntro() {
  const [visible, setVisible] = useState(true);
  const [breaking, setBreaking] = useState(false);

  function enterSite() {
    if (breaking) return;

    setBreaking(true);

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }

  if (!visible) return null;

  return (
    <div
      className={`intro-screen ${breaking ? "intro-breaking" : ""}`}
      onClick={enterSite}
    >
      <h1 className="intro-logo">
        STND COMPANY
      </h1>

      <div className="building-container">

        <div className="building building-left" />

        <div className="building building-right" />

        <svg
          className="building-crack"
          viewBox="0 0 100 360"
        >
          <polyline
            points="50,0 42,55 58,105 44,160 57,220 46,285 52,360"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

      </div>

      <p className="intro-click">
        CLIQUE PARA ENTRAR
      </p>
    </div>
  );
}