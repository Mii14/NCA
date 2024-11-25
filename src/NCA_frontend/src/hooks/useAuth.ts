import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";

// Custom hook to manage authentication logic
const useAuth = () => {
  // State to hold the auth client instance
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);

  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State to hold the user's identity
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuthClient = async () => {
      try {
        // Initialize authClient asynchronously
        const client = await AuthClient.create();
        setAuthClient(client); // Set authClient once it's created

        // Check if the user is authenticated (only if client is created)
        if (client) {
          const authenticated = await client.isAuthenticated();
          setIsAuthenticated(authenticated);

          // If authenticated, get the user's identity
          if (authenticated) {
            const identity = await client.getIdentity();
            setUser(identity.toString());
          }
        }
      } catch (error) {
        console.error("Error initializing auth client:", error);
      }
    };

    initializeAuthClient(); // Call the function when component mounts
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return { authClient, isAuthenticated, user };
};

export default useAuth;
