import React, {useState} from 'react'

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';



import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark') 
      document.body.style.backgroundColor='#212530';
      showAlert("changed to Dark mode enabled", "success");
      document.title = "TextForm - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("changed to Light Mode enabled", "success");
      document.title = "TextForm - Light Mode";
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert((
      {
        msg: message,
        type: type
      }
    ))
    setTimeout(()=>{
      setAlert(null);
    },3000);
  }

 
  return (
    <>
  <Navbar  title="TextForm" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">


  <Textform showAlert={showAlert} heading="Text Analysis "  mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
