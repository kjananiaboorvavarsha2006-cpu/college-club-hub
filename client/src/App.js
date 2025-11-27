import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import UserProfile from './components/Auth/UserProfile';

import ClubList from './components/Clubs/ClubList';
import ClubForm from './components/Clubs/ClubForm';

import MemberList from './components/Members/MemberList';
import MemberForm from './components/Members/MemberForm';

import EventList from './components/Events/EventList';
import EventForm from './components/Events/EventForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  {/* Public Routes */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Private Routes */}
  <Route path="/" element={<PrivateRoute><ClubList /></PrivateRoute>} />
  <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />

  <Route path="/clubs/new" element={<PrivateRoute><ClubForm /></PrivateRoute>} />
  <Route path="/clubs/edit/:id" element={<PrivateRoute><EditClubForm /></PrivateRoute>} />

  <Route path="/members/:clubId" element={<PrivateRoute><MemberList /></PrivateRoute>} />
  <Route path="/members/:clubId/new" element={<PrivateRoute><MemberForm /></PrivateRoute>} />

  <Route path="/events/:clubId" element={<PrivateRoute><EventList /></PrivateRoute>} />
  <Route path="/events/:clubId/new" element={<PrivateRoute><EventForm /></PrivateRoute>} />
</Routes>

    </Router>
  );
}

export default App;
