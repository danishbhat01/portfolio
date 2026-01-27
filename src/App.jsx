import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/common/Background';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here if needed, e.g., /project/:id */}
      </Routes>
    </Router>
  );
}

export default App;
