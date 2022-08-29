import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Home';
import Card from './components/Card';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<App />} />
        <Route exact path="/Card" element={<Card />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
