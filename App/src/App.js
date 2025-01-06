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
      showAlert("changed to Dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("changed to Light Mode enabled", "success");
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
  }

 
  return (
    <>
  <Navbar  title="TextForm" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <Textform  heading="Text Analysis "  mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
