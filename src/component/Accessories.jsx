import { useState } from "react";

function Accessories() {
  const [title, setTitle] = useState("Backgrounds");

  return (
    <section className="accessories">
      <div>
        <h1>Accessorize your Alpaca</h1>
        <div className="buttons">
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Backgrounds
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Ears
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Eyes
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Hair
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Leg
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Mouth
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Neck
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Accessories
          </button>
          <button
            onClick={(e) => {
              setTitle(e.target.textContent);
            }}
          >
            Nose
          </button>
        </div>
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default Accessories;
