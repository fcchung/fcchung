import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <h1 style={{marginTop: "5vh"}}>About Me</h1>
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

            <h2>Education</h2>
            <h3>M.S. Computer Science - Northeastern University</h3>
            <img id="neulogo" width = {300} src={require("../images/neuLogo.png")} alt="Northeastern University Logo"/>
            <h4>Courses</h4>
            <h3>B.S Finance and Marketing - Arizona State University</h3>
            <img id="asulogo" width = {300}src={require("../images/asu-wpcarey-logo.png")} alt="W.P. Carey school Business School Logo"/>
            <h4>Courses</h4>
            



        </Container>
    )
}

export default About;