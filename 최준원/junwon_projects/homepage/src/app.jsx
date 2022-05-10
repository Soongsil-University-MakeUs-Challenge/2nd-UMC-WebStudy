import "./app.css";
import Introduce from "./components/introduce";
import Navbar from "./components/navbar";
import Remainder from "./components/remainder";
import Reviews from "./components/reviews";
import Trip from "./components/trip";

function App() {
  return (
    <>
      <Navbar />
      <Introduce />
      <Trip />
      <Reviews />
      <Remainder />
    </>
  );
}

export default App;
