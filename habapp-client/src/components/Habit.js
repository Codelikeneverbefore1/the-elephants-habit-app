import React, { useState } from 'react';
import '../App.css';
import '../styles/Habit.css';

function Habit() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');
  const [habitToUpdate, setHabitToUpdate] = useState(null);


  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [habitToDelete, setHabitToDelete] = useState(null);

  const updateHabit = (habitId) => {
    const habitToUpdate = list.find((habit) => habit.id === habitId);
    if (habitToUpdate) {
      setName(habitToUpdate.habit);
      setGoal(habitToUpdate.goal);
      setDeadline(habitToUpdate.deadline);
      setHabitToUpdate(habitToUpdate);
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
    const updatedList = list.filter((habit) => habit.id !== habitId);
    setList(updatedList);
    
    setIsDialogOpen(true);
    setHabitToDelete(habitId);
    

  };

  
  const confirmDelete = () => {
    
    setIsDialogOpen(false);

    
    const updatedList = list.filter((habit) => habit.id !== habitToDelete);
    setList(updatedList);
  };

  const cancelDelete = () => {
    
    setIsDialogOpen(false);
    setHabitToDelete(null);
  };

  

  return (
    <div>
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

      <button className="buttonStyle" onClick={addHabit}>Submit Habit</button>
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
              Update
            </button>
          </li>
        ))}
      </ul>

      {isDialogOpen && (
        <div className="dialog">
          <p>Do you want to delete this habit?</p>
          <button onClick={confirmDelete}>Delete</button>
          <button onClick={cancelDelete}>Cancel</button>
        </div>
      )}

    </div>
  );
}

export default Habit;