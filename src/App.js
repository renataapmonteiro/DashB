import React from 'react';
import './App.module.css';
import Header from './components/Header';
import Search from './components/Search';
import Rank from './components/Rank';
import CurrencyDataList from './components/CurrencyDataList';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="ui-container">
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Rank} />
        <Route path='/cdl' exact component={Search} />
        <Route path='/cdl' component={CurrencyDataList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
