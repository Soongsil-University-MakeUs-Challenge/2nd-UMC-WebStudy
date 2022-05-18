import "./app.css";
import Introduce from "./components/introduce";
import Navbar from "./components/navbar";
import Remainder from "./components/remainder";
import Reviews from "./components/reviews";
import Trip from "./components/trip";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="nav_slash"></div>
        <Introduce />
        <Trip />
        <Reviews />
        <Remainder />
      </div>
    </>
  );
}

export default App;
