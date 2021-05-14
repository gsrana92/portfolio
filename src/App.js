//import "./App.css";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
//import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
//import AppRouter from "./Routers/AppRouter";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <Projects />
      <ContactPage />
    </div>
  );
}

export default App;
