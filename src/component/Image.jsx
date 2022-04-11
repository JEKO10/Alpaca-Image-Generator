import bg from "../alpaca/backgrounds/blue50.png";

function Image() {
  return (
    <section className="image">
      <img src={bg} alt="IMG" />
      <button id="download">Download</button>
    </section>
  );
}

export default Image;
