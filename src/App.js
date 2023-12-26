import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogViews from './views/BlogViews';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogViews />} />
      </Routes>
    </Router>
  );
}
