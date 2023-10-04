import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Company</h4>
                        <a href="/#">
                            <p>About Us</p>
                        </a>
                        <a href="/#">
                            <p>Career</p>
                        </a>
                        <a href="/#">
                            <p>Editorial Team</p>
                        </a>
                        <a href="/#">
                            <p>Protection</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>More</h4>
                        <a href="/#">
                            <p>Terms & Condition</p>
                        </a>
                        <a href="/#">
                            <p>Privacy</p>
                        </a>
                        <a href="/#">
                            <p>
                                Advertise</p>
                        </a>
                        <a href="/#">
                            <p>Join as Doctors</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Our partner</h4>
                        <a href="/#">
                            <p>One-Fitness</p>
                        </a>
                        <a href="/#">
                            <p>One-Drugs</p>
                        </a>
                        <a href="/#">
                            <p>
                                One-Live</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Contact</h4>
                        <a href="/#">
                            <p>351 Willow Street Franklin, MA 02038</p>
                        </a>
                        <a href="/#">
                            <p>701-573-7582</p>
                        </a>
                        <a href="/#">
                            <p>
                                healthcare@temporary.net</p>
                        </a>
                        <a href="/#">
                            <h4>
                                Social Media</h4>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            {/* <i className="fa far-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-google-plus"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-linkedin"></i> */}
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                        Copyright © {new Date().getFullYear()} <span>MACode ID</span> . All right reserved
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;