
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState} from 'react'
function App() {
  const [mode, setMode] = useState('light')
 
  const toggle = () =>{
    if(mode === 'light' ){
      setMode('dark')
      
    }else{
      setMode('light')
      
    }
  }

  return (
    <div className="App">
      <Navbar title = "Katari"  mode = {mode} toggle ={toggle}  />
      <div className='container'>
      <TextForm title = "Enter Your Text To Analysis"/>
      </div>
    </div>
  );
}

export default App;
