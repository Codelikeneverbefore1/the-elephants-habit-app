import React, { useState } from 'react';
import './App.css';
import '../styles/Habit.css';

function Habit() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  const addHabit = () => {
    // Check if all required fields are filled
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

    // Add the Habit to the list
    setList([...list, newHabit]);

    // Clear input boxes
    setName('');
    setGoal('');
    setDeadline('');
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
          const date = new Date(e.target.value);
          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
          setDeadline(formattedDate);
        }}
        required 
      />

      <button className="buttonStyle" onClick={addHabit}>Submit Habit</button>
    </div>

      <ul>
        {list.map((habit) => (
          <li key={habit.id}>
            <strong>{habit.habit}</strong> - {habit.goal} - By {habit.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Habit;
