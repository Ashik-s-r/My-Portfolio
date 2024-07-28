import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <h2>Resume</h2>
            <p>You can download my resume by clicking the button below:</p>
            <a href="/resume.pdf" download="Ashik.pdf">
                <button>Download Resume</button>
            </a>
        </section>
    );
};

export default Resume;