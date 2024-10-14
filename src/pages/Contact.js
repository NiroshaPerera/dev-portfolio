import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <section id="contact" className="contact-section">
          <h2>Contact Me</h2>  
          <div className='contact-container'>
          <form className='contact-form' action='https://formspree.io/f/form-id'method='POST'>
           <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' name='name' required/>
           </div>
           <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' name='email' required/>
           </div>
            <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea id='message'name='message'rows="5" required> </textarea>
            </div>
            <button type="submit" className='submit-button'>Send Message</button>
          </form>
          </div>
        </section>
    );
}

export default Contact;