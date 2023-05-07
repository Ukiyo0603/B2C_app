import React from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './HomePage';

const Payment = () => (
  <Router>
    <Route path='/' component = {HomePage}/>
  </Router>
);

export default Payment;