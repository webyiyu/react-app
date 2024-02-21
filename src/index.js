import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogViews from './views/BlogViews';
import Timer from './views/Timer';
import ThemeContext from './views/ThemeContext';
import CustomHooks from './views/CustomHooks';
import BlogList from './views/BlogList';
import ComplexState from './views/complexState/index';
import Test from './views/test';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isApp = false;
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<BlogViews isApp={isApp} />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/theme" element={<ThemeContext />} />
      <Route path="/customHooks" element={<CustomHooks />} />
      <Route path="/blogList" element={<BlogList />} />
      <Route path="/complexState" element={<ComplexState />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </Router>,
  // </React.StrictMode>,
);
