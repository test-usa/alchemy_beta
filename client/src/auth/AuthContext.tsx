import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface IUserContext {
  user: { id: string; email: string } | null; // Adjust based on your actual API response
  setUser: React.Dispatch<React.SetStateAction<{ id: string; email: string } | null>>;
}

const AuthContext = createContext<IUserContext | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null); // Update based on your API response structure

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://alchemy-beta-server-3.onrender.com/api/user/getUser',{
            method: 'GET',
            credentials: 'include', // Ensure credentials (cookies) are sent with the request
          });
          console.log(response)
        if (!response.ok) {
          throw new Error('There is a problem with fetching data');
        }
        const data = await response.json();
        setUser(data); // Assuming the response has user data in this format
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): IUserContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
