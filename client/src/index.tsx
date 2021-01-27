import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App name="react-starter" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
