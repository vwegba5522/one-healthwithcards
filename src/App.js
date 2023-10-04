import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import img1 from './Images/bg-doctor.png';
import { About } from "./components/Lists/AboutUs";
import { Homes } from "./components/Lists/Home";
import Card from './components/Lists/Card'
import img2 from './Images/doctor_1.jpg'
import BackToTop from "./BackToTop";
import Footer from "./footer/footer";



function App() {
    const [cards] = useState([
        {
            title: 'Our Doctors',
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
        },
        {
            title: 'Our Doctors1',
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
        },
        {
            title: 'Our Doctors2',
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
        },
        {
            title: 'Our Doctors3',
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
        },
        {
            title: 'Our Doctors4',
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
        },
        {
            title: 'Our Doctors5',
            text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
        },
    ])

    return (
        <div className="App">
            <Navbar />
            <Homes />
            <div className="fulll">
                <div className="fullhero">
                    <div className="seperate">
                        <h1>Welcome to Your Health<br /> Center</h1>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy<br /> eirmod tempor invidunt
                            ut
                            labore et dolore magna aliquyam erat, sed diam<br /> voluptua. At vero eos et accusam et justo duo
                            dolores
                            et ea rebum.<br />Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro<br />
                            consequatur
                            ex aspernatur. Explicabo, excepturi accusantium! Placeat<br /> voluptates esse ut optio facilis!</p>
                        <button className="button-hero1">Learn More</button>
                    </div>
                    <img className="immg" src={img1} alt="" />
                </div>
            </div>

            <section className="sectoin">
                <div className="containe">
                    <h1>Our Doctors</h1>
                    <div className="cards">
                        {cards.map((card, i) => (
                            <div key={i} className="card">
                                <h3>{card.title}</h3>
                                <p>{card.text}</p>
                                <button className="btss">Read More..</button>
                            </div>
                        )
                        )
                        }

                    </div>
                </div>
            </section>

            <About />
            <Card  title='Card Title'
            imageUrl={img2}
            body='List of Countries without Coronavirus case'
            />
            <BackToTop/>
            <Footer />
        </div>
    );
}

export default App;
