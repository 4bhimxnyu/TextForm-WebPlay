import React, {useState} from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';

function App() {

  const [mode, setMode] = useState('dark');

  return (
    <>
  <Navbar  title="TextForm" mode={mode} />
  <div className="container">
  {/* <Textform  heading="Text Analysis React App" /> */}
  <About/>
  </div>
  </>
  );
}

export default App;
