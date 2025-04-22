import React from 'react';

import { useState } from 'react';
import '../styles/pages/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="form-title">Get in Touch</h2>
          {submitted && <p style={{ color: 'green', marginBottom: '15px' }}>Message sent successfully!</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="info-title">Contact Details</h2>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <div className="info-text">qi095413@ucf.edu</div>
          </div>
          <div className="info-item">
            <span className="info-icon">📞</span>
            <div className="info-text">863-257-2161</div>
          </div>

        </div>
      </div>
    </section>
  );
}
