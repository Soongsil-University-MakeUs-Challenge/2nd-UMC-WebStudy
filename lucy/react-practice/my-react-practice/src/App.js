import "./index.css";
import "./App.css";

// 컴포넌트들
import NavBar from "./components/NavBar.js";
// import Main from "./components/Main.js";
// import MainBlack from "./components/MainBlack.js";
// import SubInfo from "./components/SubInfo.js";
// import FooterBlack from "./components/FooterBlack.js";
import Footer from "./components/Footer.js";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Program from "./pages/program";
import Recruit from "./pages/recruit";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/recruit" element={<Recruit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
