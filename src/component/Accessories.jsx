import { useState } from "react";
import { alpacaConfig } from "../alpacaConfig";

function Accessories() {
  const [title, setTitle] = useState("Backgrounds");
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accessories">
      <div>
        <h1>Accessorize your Alpaca</h1>
        <div className="buttons">
          {alpacaConfig.map((button) => {
            return (
              <button
                className={isActive === button.id ? "active" : ""}
                key={button.id}
                onClick={(e) => {
                  setTitle(e.target.textContent);
                  setIsActive(button.id);
                }}
              >
                {button.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="underline"></div>
      <div>
        <h1>{title}</h1>
        <div className="buttons parts">
          {alpacaConfig.map((item) => {
            if (item.label === title) {
              return item.items.map((part) => {
                return <button key={part.id}>{part.label}</button>;
              });
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Accessories;
