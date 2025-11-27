import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div style={{ marginTop: '20px' }}>
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            margin: '0 5px',
            padding: '5px 10px',
            backgroundColor: page === currentPage ? '#007bff' : '#f0f0f0',
            color: page === currentPage ? 'white' : 'black',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;