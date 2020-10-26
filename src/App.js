import React from 'react';
import './App.module.css';
import Header from './components/Header';
import Search from './components/Search';
import Rank from './components/Rank';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="ui-container">
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Rank} />
        <Route path='/cdl' exact component={Search} />
      </BrowserRouter>
    </div>
  );
}

export default App;
