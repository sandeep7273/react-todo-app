import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './Form.css';

const Form = ({ onSubmit, formData, setFormData }) => (
  <form onSubmit={onSubmit} className="form">
    <Input
      type="text"
      placeholder="Name"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
    <Input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
    <Button type="submit">Submit</Button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Form;
