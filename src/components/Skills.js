// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const Skills = () => {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
