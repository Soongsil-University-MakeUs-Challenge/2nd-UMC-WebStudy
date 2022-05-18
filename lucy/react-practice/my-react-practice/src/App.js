import "./index.css";
import "./App.css";

// 컴포넌트들
import NavBar from "./components/NavBar.js";
import Main from "./components/Main.js";
import MainBlack from "./components/MainBlack.js";
import SubInfo from "./components/SubInfo.js";
import FooterBlack from "./components/FooterBlack.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <MainBlack />
      <SubInfo />
      <FooterBlack />
      <Footer />
    </>
  );
}

export default App;
