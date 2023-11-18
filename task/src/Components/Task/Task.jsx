import React, { useState } from 'react';
import './task.css'; // Import your CSS file

import { Button } from 'react-bootstrap';

const Task = ({ task, toggleTask, deleteTask, updateTask, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.done ? 'done' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <div className="task-buttons">
            <Button className="btn btn-primary" onClick={handleUpdate}>
              Save
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer' }}>
            {index + 1}. {task.text}
          </span>
          <div className="task-buttons">
            <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
            <button className="btn btn-info" onClick={() => setIsEditing(true)}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
