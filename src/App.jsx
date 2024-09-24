import { useState } from 'react';
import Hero from './components/Hero';
import './App.css';
import Navbar from './components/navbar';
import Technologies from './components/technologies';
import Education from './components/education';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;
