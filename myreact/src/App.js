import React, {useState} from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')}
    else{
      setMode('light');
    }
  }

  return (
    <>
  <Navbar  title="TextForm" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
  {/* <Textform  heading="Text Analysis React App" /> */}
  <About/>
  </div>
  </>
  );
}

export default App;
