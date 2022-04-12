import { alpacaConfig } from "../alpacaConfig";

function Image() {
  const base = process.env.PUBLIC_URL;

  return (
    <section className="image">
      <div className="content">
        <img src={base + alpacaConfig[0].items[0].src} alt="BG" id="bg" />
        <img src={base + alpacaConfig[1].items[0].src} alt="ears" id="ears" />
        <img src={base + alpacaConfig[2].items[0].src} alt="eyes" id="eyes" />
        <img src={base + alpacaConfig[3].items[0].src} alt="hair" id="hair" />
        <img src={base + alpacaConfig[4].items[0].src} alt="leg" id="leg" />
        <img src={base + alpacaConfig[5].items[0].src} alt="mouth" id="mouth" />
        <img src={base + alpacaConfig[6].items[0].src} alt="neck" id="neck" />
        <img
          src={base + alpacaConfig[7].items[0].src}
          alt="accessories"
          id="accessories"
        />
        <img src={base + alpacaConfig[8].items[0].src} alt="nose" id="nose" />
      </div>
      <button id="download">Download</button>
    </section>
  );
}

export default Image;
