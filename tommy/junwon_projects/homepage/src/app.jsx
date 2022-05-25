import "./app.css";
import Introduce from "./components/introduce";
import Navbar from "./components/navbar";
import Remainder from "./components/remainder";
import Reviews from "./components/reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Introduce />}></Route>
            <Route path="/tommy" element={<Reviews />}></Route>
            <Route path="/umc_web" element={<Remainder />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
