import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/static/Home'
import Signup from './components/sessions/Signup'
import Login from './components/sessions/Login'
import BookList from './components/books/BookList'
import BookForm from './components/books/BookForm'
import NavBar from './components/navigation/NavBar'
import './App.css';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/new" element={<BookForm />} />
        </Routes>
      </Router>
    
  );
}

export default App;
