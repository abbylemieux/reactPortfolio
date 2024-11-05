import React, { useState } from 'react';
import '/src/Styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {

      console.log('Form submitted:', formData);
  
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const validateForm = () => {
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
    }
    if (!formData.message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  return (
    <div>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
