import React from 'react';

const TaskModal = ({ title, children, onClose, onSave }) => {
  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <h2>{title}</h2>
        {children}
        <button onClick={onSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '400px',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
};

export default TaskModal;
