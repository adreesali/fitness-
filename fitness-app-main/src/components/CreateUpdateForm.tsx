// CreateUpdateForm.js

import React, { useState } from 'react';
import axios from 'axios';

const CreateUpdateForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/data', formData, {
      headers: { Authorization: `Bearer your-jwt-token` },
    })
      .then(response => {
        console.log('Data added successfully:', response.data);
        // Add any additional logic as needed
      })
      .catch(error => {
        console.error('Error adding data:', error);
        // Handle errors appropriately
      });
  };

  return (
    <div>
      <h2>Create/Update Data</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        <label>Description:</label>
        <textarea name="description" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateUpdateForm;
