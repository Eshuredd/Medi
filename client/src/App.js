import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ChatPage from './components/ChatPage';
import RoleSelection from './components/RoleSelection';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import AdminHome from './components/AdminHome';
import Home from './components/Home';
import DomainSelection from './components/DomainSelection'; // Import DomainSelection
import Sections from './components/Sections';
import AdminPostList from "./components/AdminPostList";
import PostList from './components/PostList'; // Import PostList
import PostForm from './components/PostForm';
import QuizDetails from './components/QuizDetails';
import QuizList from './components/QuizList';
import QuizUpload from './components/QuizUpload';
import Chatbot from './components/Chatbot';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import YogaPage from './components/YogaPage';
import Dboard from './components/Dboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserCreatePost from './components/UserCreatePost';
import ExerciseVideos from './components/ExerciseVideos';  // Import ExerciseVideos component

const DynamicNavbar = ({ role, username, resetAuth }) => {
  const renderAdminLinks = () => (
    <>
      <Nav.Link as={Link} to="/AdminHome">Home</Nav.Link>
      <Nav.Link as={Link} to="/AdminHome/create-post">Create Post</Nav.Link>
      <Nav.Link as={Link} to="/AdminHome/manage-posts">Manage Posts</Nav.Link>
      <Nav.Link as={Link} to="/AdminHome/sections">Manage Sections</Nav.Link>
      <Nav.Link as={Link} to="/AdminHome/upload-quiz">Upload Quiz</Nav.Link>
      {/* <Nav.Link as={Link} to="/Home/forum">Community Forum</Nav.Link> */}
    </>
  );

  const renderUserLinks = () => (
    <>
      <Nav.Link as={Link} to="/Home">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/Home/forum/select-domain">Community Forum</Nav.Link>
      <Nav.Link as={Link} to="/Home/quizzes">Quizzes</Nav.Link>
      <Nav.Link as={Link} to="/Home/sections">Explore Sections</Nav.Link>
      <Nav.Link as={Link} to="/Home/YogaPage">Yoga</Nav.Link>
      <Nav.Link as={Link} to="/Home/create-post">Create Post</Nav.Link>
      <Nav.Link as={Link} to="/Home/ChatPage">ChatUs</Nav.Link>
      <Nav.Link as={Link} to="/Home/Dboard">DashBoard</Nav.Link>
      <Nav.Link as={Link} to="/Home/exercise-videos">Exercise Videos</Nav.Link> {/* Add link to Exercise Videos page */}
    </>
  );

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={() => {
            resetAuth();
            console.log("Manaswini clicked, resetAuth called");
          }}
          style={{ fontWeight: "bold" }}
        >
          Manaswini
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {role === "admin" ? renderAdminLinks() : renderUserLinks()}
          </Nav>
          <Nav className="ml-auto">
            {/* Display username if logged in */}
            {username && <Nav.Link disabled>Hello, {username}</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const App = () => {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const [domain, setDomain] = useState(null);

  const handleRoleSelection = (role) => {
    setRole(role);
  };

  const handleLogin = (username, id, role, domain) => {
    setRole(role);
    console.log(`role : ${role}`);
    setIsAuthenticated(true);
    setUsername(username);
    console.log(`username : ${username}`);
    setId(id);
    console.log(`Id : ${id}`);
    if (role === "admin") {
      setDomain(domain);
      console.log(`Domain: ${domain}`);
    }
  };

  const resetAuth = () => {
    console.log("Resetting role and authentication");
    setRole(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // If username is already set, you could navigate to the respective page.
    if (isAuthenticated && role) {
      // Navigate only when role and authentication are confirmed
    }
  }, [isAuthenticated, role]);

  return (
    <Router>
      <div>
        {isAuthenticated && role && (
          <DynamicNavbar
            role={role}
            username={username}
            resetAuth={resetAuth}
          />
        )}

        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to={role === "admin" ? "/AdminHome" : "/Home"} /> : <RoleSelection onSelectRole={handleRoleSelection} onLoginSuccess={handleLogin} />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to={role === "admin" ? "/AdminHome" : "/Home"} /> : <LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to={role === "admin" ? "/AdminHome" : "/Home"} /> : <RegistrationForm />} />
          <Route path="/AdminHome" element={isAuthenticated && role === "admin" ? <AdminHome username={username} id={id} domain={domain} /> : <Navigate to="/" />} />
          <Route path="/AdminHome/create-post" element={isAuthenticated && role === "admin" ? <PostForm username={username} domain={domain} id={id} /> : <Navigate to="/" />} />
          <Route path="/AdminHome/manage-posts" element={isAuthenticated && role === "admin" ? <AdminPostList username={username} domain={domain} id={id} /> : <Navigate to="/" />} />
          <Route path="/AdminHome/sections" element={isAuthenticated && role === "admin" ? <Sections /> : <Navigate to="/" />} />
          <Route path="/AdminHome/upload-quiz" element={isAuthenticated && role === "admin" ? <QuizUpload /> : <Navigate to="/" />} />
          <Route path="/Home" element={isAuthenticated && role === "user" ? <Home id={id}/> : <Navigate to="/" />} />
          <Route path="/Home/forum/select-domain" element={isAuthenticated ? <DomainSelection /> : <Navigate to="/" />} />
          <Route path="/Home/forum/:domain" element={isAuthenticated ? <PostList username={username} id={id} /> : <Navigate to="/" />} />
          <Route path="/Home/sections" element={isAuthenticated ? <Sections /> : <Navigate to="/" />} />
          <Route path="/Home/quizzes" element={isAuthenticated ? <QuizList /> : <Navigate to="/" />} />
          <Route path="/Home/YogaPage" element={isAuthenticated ? <YogaPage /> : <Navigate to="/" />} />
          <Route path="/Home/chatbot" element={isAuthenticated ? <Chatbot /> : <Navigate to="/" />} />
          <Route path="/Home/create-post" element={isAuthenticated ? <UserCreatePost username={username} id={id} /> : <Navigate to="/" />} />
          <Route path="/Home/exercise-videos" element={isAuthenticated ? <ExerciseVideos /> : <Navigate to="/" />} /> {/* Add Exercise Videos route */}
          <Route path="/Home/Dboard" element={isAuthenticated ? <Dboard username={username} id={id}/> : <Navigate to="/" />} />
          <Route path="/Home/ChatPage" element={isAuthenticated ? <ChatPage username={username} id={id}/> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
