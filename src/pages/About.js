import React from 'react';
import './About.css';
import img1 from '../images/img1.jpeg';

function About () {
    return (
        <section id="about" className='about-section'>
            <div className='about-container'>
            <h2>About Me</h2>
            <p>I am a passionate web developer specializing in React, JavaScript, and CSS.
          I enjoy building responsive and user-friendly websites that focus on delivering
          exceptional user experiences. With a keen eye for detail and a dedication to continuous learning,
          I am always looking for opportunities to grow and take on new challenges.</p>
          <div className='about-image'>
            <img src={img1} alt='Nirosha'/>
          </div>
          </div>
        </section>
    );
}

export default About;