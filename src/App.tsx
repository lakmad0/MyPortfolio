import React from 'react';
import logo from './logo.svg';
import 'styles/App.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Projects from 'components/Projects';

function App() {
  return (
    <>      
      <Header/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;
