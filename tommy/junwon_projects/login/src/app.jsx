import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Login from "./components/login";
import Nav from "./components/nav";
import Signup from "./components/signup";
import Home from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
