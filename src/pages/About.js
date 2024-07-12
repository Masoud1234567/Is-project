import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Our Student Management System</h1>
      </div>
      <div className="about-us-content">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide a comprehensive and user-friendly Student Management System that empowers schools, administrators, teachers, and parents to efficiently manage student information, track academic progress, and foster a collaborative learning environment.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            We envision a future where all students have access to a personalized and data-driven education system that supports their individual needs and helps them reach their full potential.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation: We are committed to continuously improving our system to meet the evolving needs of the education sector.</li>
            <li>Collaboration: We work closely with our clients to understand their requirements and provide tailored solutions.</li>
            <li>Integrity: We uphold the highest standards of ethics and privacy in managing student data.</li>
            <li>Empowerment: Our system is designed to empower educators, administrators, and parents to make informed decisions and support student success.</li>
          </ul>
        </div>
        <div className="about-us-section">
          <h2>Our Team</h2>
          <p>
            Our team is composed of experienced educational technology professionals, software engineers, and user experience designers who are passionate about transforming the way schools manage student information and drive academic achievement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;