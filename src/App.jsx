import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-root">
      <Navbar></Navbar>

      <Home />

      <About />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
