import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../../api';

function EventForm() {
  const { clubId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/events', {
        title,
        description,
        date,
        club: clubId,
        createdBy: null, // Set your user ID here or handle in backend
      });
      alert('Event created');
      navigate(`/events/${clubId}`);
    } catch (err) {
      alert('Error creating event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Event</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
