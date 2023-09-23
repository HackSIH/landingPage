import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home/>
        <About/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
