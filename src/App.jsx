import "./App.css";
import Footer from "./components/Footer";

import Hero from "./components/Hero";

import StoreCards from "./components/StoreCards";
import { Testimonials } from "./components/Testimonials";


function App() {
  return (
    <div className=" bg-slate-950 scroll-smooth">
      <Hero />
      <StoreCards/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
