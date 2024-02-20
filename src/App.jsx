import './App.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes';

export const App = () =>  {
  return (
    <Router basename='/holywater'>
    
    <div className='App'>
    <RoutesComponent />

    </div>

    </Router>
  );
}
