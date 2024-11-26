import React, {useState} from 'react'

import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#f8f9fa';
    }
  }

  return (
    <>
  <Navbar  title="TextForm" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
  <Textform  heading="Text Analysis React App"  mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
