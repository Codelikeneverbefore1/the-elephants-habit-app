import React, { useState } from 'react';
import '../App.css';
import '../styles/Habit.css';

function Habit() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [habitToDelete, setHabitToDelete] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);
  
  const updateHabit = (habitId) => {
    const habitToUpdate = list.find((habit) => habit.id === habitId);
    if (habitToUpdate) {
      setName(habitToUpdate.habit);
      setGoal(habitToUpdate.goal);
      setDeadline(habitToUpdate.deadline);

      setEditingIndex(list.findIndex((habit) => habit.id === habitId));
    } else {
      setEditingIndex(-1); 
    }
  };
  
  const updateExistingHabit = () => {
    if (!name || !goal || !deadline) {
      alert('Please fill out all required fields.');
      return;
    }
  
    const updatedHabit = {
      id: list[editingIndex].id, 
      habit: name,
      goal: goal,
      deadline: deadline,
    };
  
    const updatedList = [...list];
    updatedList[editingIndex] = updatedHabit;
    setList(updatedList);
  
    setName('');
    setGoal('');
    setDeadline('');
    setEditingIndex(-1); 
  };
     
    }
  };

  const addHabit = () => {
    
    if (!name || !goal || !deadline) {
      alert('Please fill out all required fields.');
      return;
    }

    const newHabit = {
      id: Math.random(),
      habit: name,
      goal: goal,
      deadline: deadline,
    };
    
    setList([...list, newHabit]);
    
    setName('');
    setGoal('');
    setDeadline('');
  };

  const deleteHabit = (habitId) => {
    setIsDialogOpen(true);
    setHabitToDelete(habitId);

  };

  const confirmDelete = () => {
    setIsDialogOpen(false);

    if (habitToDelete !== null) {
      const updatedList = list.filter((habit) => habit.id !== habitToDelete);
      setList(updatedList);
      setHabitToDelete(null);
    }
  };

  };

  const confirmDelete = () => {
    setIsDialogOpen(false);

    if (habitToDelete !== null) {
      const updatedList = list.filter((habit) => habit.id !== habitToDelete);
      setList(updatedList);
      setHabitToDelete(null);
    }
  };

  const cancelDelete = () => {
    
    setIsDialogOpen(false);
    setHabitToDelete(null);
  };

  return (
    <div className={`page-wrapper ${isDialogOpen ? 'blur-background' : ''}`}>
      <h2 className="container">Create a Habit</h2>

    <div className="container">    
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
      />

      <label>Goal</label>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        required 
      />

      <label>Duration</label>
      <input
        type="date"
        value={deadline}
        onChange={(e) => {
          const date = new Date(e.target.value).toISOString().slice(0, 10);
          //const formattedDate = `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
          setDeadline(date);
        }
      }
        required 
      />

      <button className="buttonStyle" onClick={editingIndex === -1 ? addHabit : updateExistingHabit}>
        {editingIndex === -1 ? 'Submit Habit' : 'Update Habit'}
      </button>
    </div>

      <ul>
        {list.map((habit) => (
          <li key={habit.id}>
          <div className="habit-details">
          <div className="habit-detail">
            <strong>{habit.habit}</strong>
          </div>
          <div className="habit-detail">{habit.goal}</div>
        <div className="habit-detail">By {habit.deadline}</div>
      </div>
            <button className="deleteButton" onClick={() => deleteHabit(habit.id)}>
              Delete
            </button>
            <button className="updateButton" onClick={() => updateHabit(habit.id)}>
              Update habit
            </button>
          </li>
        ))}
      </ul>

      {isDialogOpen && (
        
        <div className="dialog">
        <p className="dialog-text">Do you want to delete this habit?</p>
        <div className="button-container">
          <button className="cancel-button" onClick={cancelDelete}>Cancel</button>
          <button className="delete-button" onClick={confirmDelete}>Delete</button>
        </div>
      </div>
      )}

    </div>
  );
}

export default Habit;