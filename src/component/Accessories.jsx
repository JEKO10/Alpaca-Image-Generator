import { useState } from "react";

function Accessories() {
  const [title, setTitle] = useState("Backgrounds");
  const [active, setActive] = useState("Backgrounds");

  return (
    <section className="accessories">
      <div>
        <h1>Accessorize your Alpaca</h1>
        <div className="buttons">
          <button
            className={active === "Backgrounds" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Backgrounds
          </button>
          <button
            className={active === "Ears" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Ears
          </button>
          <button
            className={active === "Eyes" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Eyes
          </button>
          <button
            className={active === "Hair" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Hair
          </button>
          <button
            className={active === "Leg" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Leg
          </button>
          <button
            className={active === "Mouth" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Mouth
          </button>
          <button
            className={active === "Neck" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Neck
          </button>
          <button
            className={active === "Accessories" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Accessories
          </button>
          <button
            className={active === "Nose" ? "active" : ""}
            onClick={(e) => {
              setTitle(e.target.textContent);
              setActive(e.target.textContent);
            }}
          >
            Nose
          </button>
        </div>
      </div>
      <div className="underline"></div>
      <div>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default Accessories;
