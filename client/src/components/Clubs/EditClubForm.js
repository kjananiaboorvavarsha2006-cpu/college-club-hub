import React, { useEffect, useState } from 'react';
import API from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

function EditClubForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [club, setClub] = useState({ name: '', description: '' });

  useEffect(() => {
    async function fetchClub() {
      try {
        const { data } = await API.get(`/clubs/${id}`);
        setClub({ name: data.name, description: data.description });
      } catch (err) {
        alert('Error fetching club');
      }
    }
    fetchClub();
  }, [id]);

  const handleChange = (e) => {
    setClub({ ...club, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/clubs/${id}`, club);
      alert('Club updated successfully');
      navigate('/');
    } catch (err) {
      alert('Error updating club');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Club</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={club.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={club.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update Club</button>
    </form>
  );
}

export default EditClubForm;
