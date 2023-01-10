import Contact from "./Components/contact/Contact";
import Home from "./Components/home/Home";
import Topbar from "./Components/topbar/Topbar";
import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
