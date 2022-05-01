import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import portrait from "../images/portrait.jpg"
const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />

const Homepage = () => {
    return (
        <div className="Homepage" style={{align: "center"}}>
            <section>
                <div style={{
                    width:"100%",
                    height:"100vh", 
                    backgroundColor: "black",
                    backgroundImage: `url(${portrait})`,
                    "background-size": "contain",
                    "background-attachment": "fixed",
                    "background-repeat": "no-repeat",
                    "background-position": "center",
                    animation: "fadeIn 3s"}}>
                <span role="img" aria-label="A portrait of Felix in the background"></span>


                </div>
                <h1 style={{color: "white", position: "relative" , left: "10vw", bottom:"60vh", fontSize: "3.8vh"}}>
                    Felix Chung <br />
                    M.S. Computer Science Student <br />
                    Northeastern Universty
                </h1>
                


            </section>
            
            <section>
                <h2>Contact Information</h2>
                <address>
                <p>
                    <div>{mapIcon} San Francisco, CA</div>
                </p>
                <p>
                    {emailIcon}<a href="mailto:fcchungg@gmail.com"> fcchungg@gmail.com </a>
                </p>
              </address>

            </section>
        </div>
    )
}

export default Homepage;