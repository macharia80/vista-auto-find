
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Register: React.FC = () => {
  // This component just redirects to the login page with the register tab active
  return <Navigate to="/login?tab=register" replace />;
};

export default Register;
