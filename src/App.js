import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import img1 from './Images/bg-doctor.png';



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
    
    <div className="fulll">
        <div className="fullhero">
            <div className="seperate">
                <h1>Welcome to Your Health<br/> Center</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br/> eirmod tempor invidunt
                    ut
                    labore et dolore magna aliquyam erat, sed diam<br/> voluptua. At vero eos et accusam et justo duo
                    dolores
                    et ea rebum.<br/>Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro<br/>
                    consequatur
                    ex aspernatur. Explicabo, excepturi accusantium! Placeat<br/> voluptates esse ut optio facilis!</p>
                <button className="button-hero">Learn More</button>
            </div>
            <img className="immg" src={img1} alt=""/>
        </div>
    </div>

    <section className="aboutflex">
        <div className="aboutflex_main">
            <div className="main">
                <h1>Welcome to Your Health
                    Center</h1>
                <div className="paragraphs">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum
                        ipsa
                        eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi
                        accusantium!
                        Placeat voluptates esse ut optio facilis!</p>

                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum
                        ipsa
                        eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi
                        accusantium!
                        Placeat voluptates esse ut optio facilis!</p>
                </div>
                <button className="button-hero">Learn More</button>
            </div>
        </div>
    </section>
    </div>
  );
}

export default App;
