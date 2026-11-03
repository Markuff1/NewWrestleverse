import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { e2eUser, useAuthUser } from './auth';

interface ProtectedRouteProps {
  children: JSX.Element;
}

// UI gate only — the real protection is firestore.rules, which refuse signed-out reads/writes.
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAuthUser();
  if (e2eUser()) return children;
  if (user === undefined) return null; // still restoring the session
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
