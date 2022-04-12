import { alpacaConfig } from "../alpacaConfig";

function Image() {
  return (
    <section className="image">
      <div className="content">
        <img
          src={process.env.PUBLIC_URL + alpacaConfig[0].items[8].src}
          alt="Ears"
        />
      </div>
      <button id="download">Download</button>
    </section>
  );
}

export default Image;
