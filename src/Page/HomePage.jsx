import Hero from "../Component/Hero";
import WhyChoose from "../Component/WhyChoose";
import About from "../Component/About";
import Counter from "../Component/Counter";
import Services from "../Component/Services";
import MakeApp from "../Component/MakeApp";
import Department from "../Component/Department";
import Frequently from "../Component/Frequently";
import Doctors from "../Component/Doctors";
import Caursol from "../Component/Caursol";
import Gallery from "../Component/Gallery";
import Contact from "../Component/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <About />
      <Counter />
      <Services />
      <MakeApp />
      <Department />
      <Doctors />
      <Frequently />
      <Caursol />
      <Gallery />
      <Contact />
    </>
  );
}

export default HomePage;
