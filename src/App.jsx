import "./App.css";
import Nav from "./components/Nav";
import HeroTxt from "./components/HeroTxt";
import HeroImg from "./components/HeroImg";

function App() {
  return (
    <>
      <Nav />

      <div className="heroContainer">
        <HeroTxt />
        <HeroImg
          url={
            "https://png.pngtree.com/png-vector/20240407/ourmid/pngtree-nike-air-max-97-sneaker-in-silver-png-image_12266447.png"
          }
        />
      </div>
    </>
  );
}

export default App;
