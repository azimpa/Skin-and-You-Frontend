import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SPA from './Components/SPA';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SPA />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;