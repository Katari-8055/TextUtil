
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title = "Katari"/>
      <div className='container'>
      <TextForm title = "Enter Your Text To Analysis"/>
      </div>
    </div>
  );
}

export default App;
