import React from "react"
import Header from "./components/header/header"
import Nav from "./components/nav/Nav"
import About from "./components/About/About"
import Experience from "./components/experience/experience"

import Contact from "./components/contact/Contact"
import Footer from "./components/footter/footer"
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
