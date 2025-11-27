import React, { useState } from 'react';
import API from '../../api';
import { useNavigate } from 'react-router-dom';

function ClubForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/clubs', { name, description, president: null });
      alert('Club created');
      navigate('/');
    } catch (err) {
      alert('Error creating club');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Club</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default ClubForm;
