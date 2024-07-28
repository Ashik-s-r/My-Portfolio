import React from 'react';
import colorSharpp from "../assets/img/footer-bg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="navbar-footer">
      <div className="navbar-footer-content">
        <div className="logo-and-links">
          <ul className="navbar-footer-menu">
            <li className="navbar-footer-menu_item"><a href="#home">Home</a></li>
            <li className="navbar-footer-menu_item"><a href="#about">About</a></li>
            <li className="navbar-footer-menu_item"><a href="#projects">Projects</a></li>
            <li className="navbar-footer-menu_item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-footer-social">
          <a href="https://github.com/Ashik-s-r" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/ashik-s-r-962708289" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/soul_of_gud_vibez?igshid=YXNpY2MzNmdycWZ3" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <img className="navbar-footer-background" src={colorSharpp} alt="Background" />
    </footer>
  );
}

export default Footer;
