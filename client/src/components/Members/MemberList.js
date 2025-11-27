import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../../api';

function MemberList() {
  const { clubId } = useParams();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const { data } = await API.get(`/members/club/${clubId}`);
        setMembers(data);
      } catch (err) {
        alert('Failed to load members');
      }
    }
    fetchMembers();
  }, [clubId]);

  return (
    <div>
      <h2>Members</h2>
      <Link to={`/members/${clubId}/new`}>Add New Member</Link>
      <ul>
        {members.map(member => (
          <li key={member._id}>
            {member.user?.username} - {member.role}
          </li>
        ))}
      </ul>
      <Link to="/">Back to Clubs</Link>
    </div>
  );
}

export default MemberList;
