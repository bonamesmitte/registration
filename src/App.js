import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FillerText from './components/FillerText';
import WebPage from './components/WebPage';

function App() {
  return (
    <div className="App">
      <WebPage />
      <FillerText />
      <RegistrationForm />
     
    </div>
  );
}

export default App;
