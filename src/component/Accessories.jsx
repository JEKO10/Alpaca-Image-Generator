import { useState } from "react";
import { alpacaConfig } from "../alpacaConfig";

function Accessories() {
  const [title, setTitle] = useState("Backgrounds");
  const [isActive, setIsActive] = useState(false);
  const [background, setBackground] = useState(0);
  const base = process.env.PUBLIC_URL;

  return (
    <main>
      <section className="image">
        <div className="content">
          <img
            src={base + alpacaConfig[0].items[background].src}
            alt="BG"
            id="bg"
          />
          <img src={base + alpacaConfig[1].items[0].src} alt="ears" id="ears" />
          <img src={base + alpacaConfig[2].items[0].src} alt="eyes" id="eyes" />
          <img src={base + alpacaConfig[3].items[0].src} alt="hair" id="hair" />
          <img src={base + alpacaConfig[4].items[0].src} alt="leg" id="leg" />
          <img
            src={base + alpacaConfig[5].items[0].src}
            alt="mouth"
            id="mouth"
          />
          <img src={base + alpacaConfig[6].items[0].src} alt="neck" id="neck" />
          <img
            src={base + alpacaConfig[7].items[0].src}
            alt="accessories"
            id="accessories"
          />
          <img src={base + alpacaConfig[8].items[0].src} alt="nose" id="nose" />
        </div>
        <div className="mechanics">
          <button id="random">Random</button>
          <button id="download">Download</button>
        </div>
      </section>

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
                  return (
                    <button
                      key={part.id}
                      id={part.id}
                      onClick={(e) => {
                        setBackground(e.target.id);
                        console.log(e.target.id);
                      }}
                    >
                      {part.label}
                    </button>
                  );
                });
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accessories;
