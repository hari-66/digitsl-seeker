import "./App.css";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Work from "./Components/work/Work";
import Testimonial from "./Components/testimonial/Testimonial";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Startup from "./Components/startup/Startup";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      {/* <Experience /> */}
      <Work />
      <Startup />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
