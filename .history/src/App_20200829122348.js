import React,{useState} from 'react';

import './App.css';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';

function App() {
const [selectedOption, setSelectedOption] = useState

  return (
    <div className="app">
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export default App;
