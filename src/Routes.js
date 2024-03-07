import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Homepage /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;