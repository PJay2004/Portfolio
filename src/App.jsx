import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Stack">TecStack</section>
      <section id="Stack">Services</section>
      <section id="Portfolio">Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
