import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <div className="max-w-screen-xl mx-auto">
          <Services />
          <Pricing />
          <Trainers />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
