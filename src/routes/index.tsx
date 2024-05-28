import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Reading from "../pages/Reading";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/daily" element={<ProtectedRoute component={Reading} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
