import React from 'react';
import './App.css';
import Header from './components/Header';
import Rank from './components/Rank';
import PageOne from './container/PageOne';

import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Rank} />
        <Route path='/cdl' exact component={PageOne} />
      </BrowserRouter>
    </div>
  );
}

export default App;
