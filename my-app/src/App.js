// import logo from './logo.svg';

import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
  <BrowserRouter>
<Navbar
  title="TextUtils"
  toggleMode={toggleMode}
  mode={mode}
  switchText={mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
/>
<Alert alert="This is a simple warning alert—check it out!"/>
<Routes>
  <Route exact path="/about" element={<About mode={mode}/>}/>
  <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/>
</Routes>
{/* <div className="container my-3"> */}
{/* <TextForm heading="Enter the text to analyze"/> */}
{/* </div> */}
    </BrowserRouter>
  );
}
export default App;
