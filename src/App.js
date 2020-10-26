import React from 'react';
import './App.module.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>App</h1>
      <Search />
    </div>
  );
}

export default App;
