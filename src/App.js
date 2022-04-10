import Image from "./component/Image";
import Accessories from "./component/Accessories";

function App() {
  return (
    <main>
      <h1 id="title">Alpaca image generator</h1>
      <section>
        <Image />
        <Accessories />
      </section>
    </main>
  );
}

export default App;
