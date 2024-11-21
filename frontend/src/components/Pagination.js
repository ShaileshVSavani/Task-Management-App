import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span style={{ margin: '0 10px' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
