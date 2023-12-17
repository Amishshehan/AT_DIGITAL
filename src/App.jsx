import { Nav, WebAndMobile, Footer, Hero, DigitalStrategy } from "./sections";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="">
    <Hero/>
    </section>
    <section className="">
      <WebAndMobile/>
    </section>
    <section className="">
      <DigitalStrategy/>
    </section>
    <section className="">
      <Footer/>
    </section>
  </main>
  );

  export default App;