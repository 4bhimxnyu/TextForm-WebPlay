import React, {useState} from 'react'

import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#212530';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

 
  return (
    <>
  <Navbar  title="TextForm" mode={mode} toggleMode={toggleMode}/>
  <Alert alert="This is an alert"/>
  <div className="container">
  <Textform  heading="Text Analysis "  mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
