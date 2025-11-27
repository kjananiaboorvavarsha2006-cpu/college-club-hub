import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../../api';

function EventList() {
  const { clubId } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data } = await API.get(`/events/club/${clubId}`);
        setEvents(data);
      } catch (err) {
        alert('Failed to load events');
      }
    }
    fetchEvents();
  }, [clubId]);

  return (
    <div>
      <h2>Events</h2>
      <Link to={`/events/${clubId}/new`}>Add New Event</Link>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.title} - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <Link to="/">Back to Clubs</Link>
    </div>
  );
}

export default EventList;
