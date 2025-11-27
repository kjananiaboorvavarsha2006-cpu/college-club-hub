import React from 'react';
function Notification({ message, type, onClose }) {
  if (!message) return null;

  const backgroundColor = type === 'error' ? '#f8d7da' : '#d4edda';
  const color = type === 'error' ? '#721c24' : '#155724';

  return (
    <div style={{
      backgroundColor,
      color,
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      position: 'relative',
    }}>
      {message}
      <button onClick={onClose} style={{
        position: 'absolute',
        top: '5px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
      }}>×</button>
    </div>
  );
}

export default Notification;
