import React, { useState } from 'react';
import '../styles/ContactMe.css'; // Import your CSS file

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear validation errors when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    let isValid = true;
    const { name, email } = formData;
    const newErrors = {};

    if (!name.trim()) {
      isValid = false;
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      newErrors.email = 'Invalid email format';
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission (e.g., send data to backend)
    localStorage.setItem('message', JSON.stringify(formData));
    console.log('Message stored in local storage:', formData);
    
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert('Thank you! Your message has been stored locally. (Check the console)');
  };

  return (
    <div className="container contact-me-container">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name && 'is-invalid'}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email && 'is-invalid'}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}