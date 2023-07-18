import logo from './logo.svg';
import './App.css';
import Habit from './Habit';
import ReactDOM from 'react-dom';

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Habit/>);
  
}

export default App;
