import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import DynamicNavbar from './components/DynamicNavbar'; // Import DynamicNavbar
import ChatPage from './components/ChatPage';
import RoleSelection from './components/RoleSelection';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AdminHome from './components/AdminHome';
import Home from './components/Home';
import DomainSelection from './components/DomainSelection';
import Sections from './components/Sections';
import AdminPostList from './components/AdminPostList';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import QuizDetails from './components/QuizDetails';
import QuizList from './components/QuizList';
import QuizUpload from './components/QuizUpload';
import Chatbot from './components/Chatbot';
import YogaPage from './components/YogaPage';
import Dboard from './components/Dboard';
import UserCreatePost from './components/UserCreatePost';
import ExerciseVideos from './components/ExerciseVideos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const [domain, setDomain] = useState(null);

  const handleRoleSelection = (role) => setRole(role);

  const handleLogin = (username, id, role, domain) => {
    setRole(role);
    setIsAuthenticated(true);
    setUsername(username);
    setId(id);
    if (role === "admin") setDomain(domain);
  };

  const resetAuth = () => {
    setRole(null);
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && role && (
          <DynamicNavbar role={role} username={username} resetAuth={resetAuth} />
        )}
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to={role === "admin" ? "/AdminHome" : "/Home"} />
              ) : (
                <RoleSelection onSelectRole={handleRoleSelection} onLoginSuccess={handleLogin} />
              )
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to={role === "admin" ? "/AdminHome" : "/Home"} />
              ) : (
                <LoginForm onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/register"
            element={
              isAuthenticated ? (
                <Navigate to={role === "admin" ? "/AdminHome" : "/Home"} />
              ) : (
                <RegistrationForm />
              )
            }
          />
          <Route
            path="/AdminHome"
            element={
              isAuthenticated && role === "admin" ? (
                <AdminHome username={username} id={id} domain={domain} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/AdminHome/create-post"
            element={
              isAuthenticated && role === "admin" ? (
                <PostForm username={username} domain={domain} id={id} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/AdminHome/manage-posts"
            element={
              isAuthenticated && role === "admin" ? (
                <AdminPostList username={username} domain={domain} id={id} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/AdminHome/sections"
            element={isAuthenticated && role === "admin" ? <Sections /> : <Navigate to="/" />}
          />
          <Route
            path="/AdminHome/upload-quiz"
            element={isAuthenticated && role === "admin" ? <QuizUpload /> : <Navigate to="/" />}
          />
          <Route
            path="/Home"
            element={isAuthenticated && role === "user" ? <Home id={id} /> : <Navigate to="/" />}
          />
          <Route
            path="/Home/forum/select-domain"
            element={isAuthenticated ? <DomainSelection /> : <Navigate to="/" />}
          />
          <Route
            path="/Home/forum/:domain"
            element={isAuthenticated ? <PostList username={username} id={id} /> : <Navigate to="/" />}
          />
          <Route path="/Home/sections" element={isAuthenticated ? <Sections /> : <Navigate to="/" />} />
          <Route path="/Home/quizzes" element={isAuthenticated ? <QuizList /> : <Navigate to="/" />} />
          <Route path="/Home/YogaPage" element={isAuthenticated ? <YogaPage /> : <Navigate to="/" />} />
          <Route path="/Home/chatbot" element={isAuthenticated ? <Chatbot /> : <Navigate to="/" />} />
          <Route
            path="/Home/create-post"
            element={isAuthenticated ? <UserCreatePost username={username} id={id} /> : <Navigate to="/" />}
          />
          <Route
            path="/Home/exercise-videos"
            element={isAuthenticated ? <ExerciseVideos /> : <Navigate to="/" />}
          />
          <Route
            path="/Home/Dboard"
            element={isAuthenticated ? <Dboard username={username} id={id} /> : <Navigate to="/" />}
          />
          <Route
            path="/Home/ChatPage"
            element={isAuthenticated ? <ChatPage username={username} id={id} /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
