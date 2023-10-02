import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="sectionbody1">
        <div className="hero1">
            <div className="designtext">
                <p>LET'S MAKE YOUR LIFE HAPPIER</p>
                <h1>Healthy Living</h1>
                <button className="button-hero">Let's Consult</button>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
