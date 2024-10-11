// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>CONTACT ME</h2>
      <p>Feel free to reach out through any of the following:</p>
      <div className="contact-info">
        <span>
          <strong>Email:</strong>
          <a href="mailto:kalpikmehta@gmail.com" target="_blank" rel="noopener noreferrer"> kalpikmehta@gmail.com</a>
        </span>
        <span>
          <strong>Linkedin:</strong>
          <a href="https://linkedin.com/in/kalpikmehta" target="_blank" rel="noopener noreferrer"> Linkedin</a>
        </span>
        <span>
          <strong>WhatsApp:</strong>
          <a href="https://wa.me/9950088940" target="_blank" rel="noopener noreferrer"> Chat on WhatsApp</a>
        </span>
        <span>
          <strong>GitHub:</strong>
          <a href="https://github.com/kalpik888" target="_blank" rel="noopener noreferrer"> kalpik888</a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
