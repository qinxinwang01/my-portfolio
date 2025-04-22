import React from 'react';

import '../styles/pages/about.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container no-image">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I enjoy reading, traveling, and baking in my free time.
          </p>
          <p className="about-text">
            My skill set includes proficiency in Adobe Creative Suite and 3D modeling using Maya.
          </p>

          <div className="about-skills">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-list">
              <span className="skill-tag">Adobe Photoshop</span>
              <span className="skill-tag">Illustrator</span>
              <span className="skill-tag">InDesign</span>
              <span className="skill-tag">Premiere Pro</span>
              <span className="skill-tag">After Effects</span>
              <span className="skill-tag">Maya</span>
              <span className="skill-tag">3D Modeling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
