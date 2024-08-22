import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { Navbar } from "./components";
import Pdf from "./container/About/Pdf/Pdf";
import "./App.scss";
// import About from './components/About.js';
// import Footer from './components/Footer.js';
// import Header from './components/Header.js';
// import Skills from './components/Skills.js';
// import Testimonial from './components/Testimonial.js';
// import Work from './components/Work.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <Routes>
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
    </Router>
  );
}

export default App;
