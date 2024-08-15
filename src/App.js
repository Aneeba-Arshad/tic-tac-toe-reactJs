import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TicTacToe from "./components/tic-tac-toe";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
}

export default App;
