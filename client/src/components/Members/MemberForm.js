import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../../api';

function MemberForm() {
  const { clubId } = useParams();
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [role, setRole] = useState('member');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/members', { user: userId, club: clubId, role });
      alert('Member added');
      navigate(`/members/${clubId}`);
    } catch (err) {
      alert('Error adding member');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Member</h2>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="member">Member</option>
          <option value="secretary">Secretary</option>
          <option value="treasurer">Treasurer</option>
        </select>
      </div>
      <button type="submit">Add Member</button>
    </form>
  );
}

export default MemberForm;
