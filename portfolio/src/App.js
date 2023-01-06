import React from 'react';
import './style/index.scss';

import NavBar from './components/Navbar/navbar';
import Home from './components/Home/home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
