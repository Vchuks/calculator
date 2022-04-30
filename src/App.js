import React from 'react';
import './App.css';
import logo from './images/dictionary.png';
import logo2 from './images/search.png';

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <h1>GROW MORE</h1>
        <img src={logo} alt="dictionary"/>
        <div className='search-button'>
          <input type='text' name='input'></input>
          <img src={logo2} alt="search" id="logo2" />
        </div>
      </div>
    </div>
  )
}

export default App
