import React from 'react';
import './Home.css';
import headerImg from "../assets/img/header-img.jpg";
import colorSharp from "../assets/img/color-sharp.png";

function Home() {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-image">
          <img src={headerImg} alt="Header" className="profile" />
        </div>
        <div className="hello">
          <p>Hello!!!</p>
        </div>
        <div className="text-info">
          <p>
            I'm Ashik! A Full Stack Developer passionate about creating dynamic and responsive web applications.
            My expertise includes frontend development using React.js and backend development with Django. I enjoy exploring new technologies and continuously improving my skills.
          </p>
        </div>
        <div className="text-btn">
          <a className="btn btn-success" href="#connect">Hire Me</a>
          <a href="/resume.pdf" download="Ashik.pdf" className="btn btn-primary">Download Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ashik-s-r-962708289/" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Ashik-s-r" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/soul_of_gud_vibez?igsh=YXNpY2MzNmdycWZ3" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}

export default Home;
