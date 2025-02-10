// PublicRoute.tsx
import React from 'react';
import { Navigate} from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // Import useAuth hook

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const { user } = useAuth(); // Get the user context

  // If the user is already authenticated, redirect them to the home page (or another protected route)
  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>; // Render the children (LoginPage) if not authenticated
};

export default PublicRoute;
