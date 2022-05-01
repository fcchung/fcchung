import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
const mapIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />

const Homepage = () => {
    return (
        <div className="Homepage">
            <section>
                <h1>
                    Felix Chung <br />
                    M.S. Computer Science Student <br />
                    Northeastern Universty
                </h1>
            </section>
            <section>
                <h2>About Me</h2>
                <p>
                    I am currently in a Master’s program in Computer Science at
                    Northeastern University. Prior to enrolling in this program, I
                    studied finance and marketing and interned at a private equity
                    startup. While I enjoy analyzing businesses in different
                    industries, I have realized that my strengths lie in solving
                    business problems with a technical approach. As an analyst, I
                    developed a variety of skills necessary for success in the field
                    of Computer Science including analytical skills to understand and
                    develop solutions to problems, and strong communication skills to
                    exchange ideas and solutions to team members and clients.
                </p>
                <p>
                    In my MSCS program, I have programmed in Python, Java, and C. I
                    also had experience in analyzing big data with R. I enjoy solving
                    complicated problems with people from different backgrounds. As a
                    strategic analyst, I also love to analyze different problems and
                    create different ways to approach and solve difficult business
                    problems. I believe that my experience as an analyst, in
                    conjunction with the skills I am developing in my master's
                    program, will make me a fit for roles in software engineering,
                    research and data science. My current goal is to gain practical
                    experience through co-op/internships and knowledge in machine
                    learning and artificial intelligence as I progress through the
                    master’s in computer science program.
            </p>
            </section>
            <section>
                <h2>Contact Information</h2>
                <address>
                <p>
                    {mapIcon}<a>San Francisco, CA</a>
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