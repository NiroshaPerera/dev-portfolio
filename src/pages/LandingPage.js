import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <section className="landing-page">
            <div className='landing-content'>
                <h1>Welcome to Dev Portfolio</h1>
                <p>Your Journey to exploring my work starts here.</p>
                <a href='/projects' className='cta-button'>View My Projects</a>
            </div>
        </section>
    );
}

export default LandingPage;