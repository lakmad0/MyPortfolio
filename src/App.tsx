import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Projects from 'components/Projects';
import Hero from 'components/Hero';

import About from 'components/About';
import Work from 'components/Work';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
