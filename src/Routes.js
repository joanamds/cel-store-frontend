import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import EditProduct from './admin/EditProduct';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/home" element={ <Homepage /> } />
        <Route path="/edit-product" element={ <EditProduct /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;