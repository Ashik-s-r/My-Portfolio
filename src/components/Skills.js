import React from "react";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import JavaScript from "../assets/img/javascript.svg";
import MySQL from "../assets/img/mysql.svg";
import Python from "../assets/img/python.svg";
import Django from "../assets/img/django.svg";
import Reactjs from "../assets/img/react-2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have expertise in both frontend and backend development. My skills include HTML, CSS, Bootstrap, and JavaScript (with React.js) for creating responsive and interactive web applications. I also specialize in Python and Django for server-side development, using MySQL for database management. Additionally, I'm experienced in developing RESTful APIs with Django REST Framework and use Git for version control. My projects are deployed using platforms like Vercel, and I primarily work with Visual Studio Code.
              </p>
              <div className="skill-grid">
                <div className="skill-item">
                  <img src={html} alt="HTML" />
                  <h5>HTML</h5>
                  <span className="tooltip">80%</span>
                </div>
                <div className="skill-item">
                  <img src={css} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="skill-item">
                  <img src={bootstrap} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="skill-item">
                  <img src={JavaScript} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="skill-item">
                  <img src={MySQL} alt="MySQL" />
                  <h5>MySQL</h5>
                </div>
                <div className="skill-item">
                  <img src={Python} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="skill-item">
                  <img src={Django} alt="Django" />
                  <h5>Django</h5>
                </div>
                <div className="skill-item">
                  <img src={Reactjs} alt="React.js" />
                  <h5>React.js</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};