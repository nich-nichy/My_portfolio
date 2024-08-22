import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import { Navbar } from "./components";
import Pdf from "./container/About/Pdf/Pdf";
import "./App.scss";
import './App.css'

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
