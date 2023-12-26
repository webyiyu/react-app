import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogViews from './views/BlogViews';
import Timer from './views/Timer';
import ThemeContext from './views/ThemeContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<BlogViews />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/theme" element={<ThemeContext />} />
    </Routes>
  </Router>,
  // </React.StrictMode>,
);
