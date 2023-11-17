// Navbar color ----- #0d1322
// BG color ----- #0F172A
// Secondary BG color ----- #0F172A
// Highlight color ----- #93C5FD
// Secondary text color ----- text-slate-300

import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-root">
      <Navbar />

      <Home />

      <About />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
