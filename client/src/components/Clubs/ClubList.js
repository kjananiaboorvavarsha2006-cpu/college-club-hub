import React, { useState, useEffect } from 'react';
import API from '../../api';
import { Link } from 'react-router-dom';

function ClubList() {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    async function fetchClubs() {
      try {
        const { data } = await API.get('/clubs');
        setClubs(data);
      } catch (err) {
        alert('Failed to load clubs');
      }
    }
    fetchClubs();
  }, []);

  return (
    <div>
      <h2>Clubs</h2>
      <Link to="/clubs/new">Add New Club</Link>
      <ul>
  {clubs.map(club => (
    <li key={club._id}>
      <Link to={`/clubs/${club._id}`}>{club.name}</Link> - President: {club.president?.username}
      <Link to={`/clubs/edit/${club._id}`} style={{ marginLeft: '10px' }}>Edit</Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default ClubList;
