import { useState } from 'react';
import AdvancedForm from './AdvancedForm';
import './App.css';
import BasicForm from './BasicForm';

function App() {
  const [view, setView] = useState('basic');

  return (
    <div>
      <h3 onClick={() => setView('basic')}>Basic</h3>
      <h3 onClick={() => setView('advanced')}>Advanced</h3>

      {view === 'basic' ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;
