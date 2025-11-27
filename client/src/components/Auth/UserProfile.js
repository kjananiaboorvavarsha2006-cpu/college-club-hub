//UserProfile component 
import React, { useEffect, useState } from 'react';
import API from '../../api';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data } = await API.get('/auth/profile');
        setUser(data);
      } catch {
        alert('Failed to load profile');
      }
    }
    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserProfile;
