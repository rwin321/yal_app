import './App.css';
import React from 'react';
import Employers from '../src/components/Employers';
import EmployersBDays from '../src/components/EmployersBDays';

const App = () => {
  return (
    <div className="App">
      <Employers />
      <EmployersBDays />
    </div>
  );
};

export default App;
