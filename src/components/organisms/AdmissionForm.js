import React, { useState } from 'react';
import Form from '../molecules/Form';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log('Form submitted:', formData);
  };

  return (
    <div className="admission-form">
      <h2>College Admission Form</h2>
      <Form onSubmit={handleSubmit} formData={formData} setFormData={setFormData} />
    </div>
  );
};

export default AdmissionForm;
