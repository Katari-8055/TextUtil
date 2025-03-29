
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react'
function App() {
  const [mode, setMode] = useState('light')
  return (
    <div className="App">
      <Navbar title = "Katari"  mode = {mode} />
      <div className='container'>
      <TextForm title = "Enter Your Text To Analysis"/>
      </div>
    </div>
  );
}

export default App;
