import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./Projectcard";
import projImg1 from "../assets/img/Calculator.png";
import projImg2 from "../assets/img/Medico.png";
import projImg3 from "../assets/img/Moviebooking.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Movie-Booking Site:",
      description: "Built an interactive movie booking platform with React.js and Django.",
      imgUrl: projImg3,
    },
    {
      title: "MEDICO - Medical Store Management:",
      description: "Created a Medical Store Management System using React.js.",
      imgUrl: projImg2,
    },
    {
      title: "Calculator",
      description: "Developed a calculator using JavaScript, HTML, and CSS.",
      imgUrl: projImg1,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects, such as an interactive Movie-Booking Site and a comprehensive Medical Store Management System (MEDICO), showcase my capability to manage full-stack development, from user authentication and data handling to deployment on platforms like Vercel. Additionally, I have developed a functional web-based Calculator using JavaScript, HTML, and CSS. I am well-versed in version control with Git and collaborative development on GitHub, using Visual Studio Code as my primary IDE for a streamlined workflow.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}