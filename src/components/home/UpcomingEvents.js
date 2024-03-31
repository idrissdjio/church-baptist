import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = ({ events }) => {
  return (
    <div className="upcoming-events-container">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-box">
            <h3 style={{ color: '#0C2D57' }}><strong>{event.name}</strong></h3>
            <p>{event.description}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Place:</strong> {event.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
