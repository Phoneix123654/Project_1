import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Body from './components/body/Body';
import My from './components/my/My';
import Rahul from './components/rahul/Rahul';
import Psycho from './components/psycho/Psycho';
import Nan from './components/nan/Nan';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/my" element={<My />} />
        <Route path="/rahul" element={<Rahul />} />
        <Route path="/psy" element={<Psycho />} />
        <Route path="/nan" element={<Nan />} />
      </Routes>
    </Router>
  );
}

export default App;
