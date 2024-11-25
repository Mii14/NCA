import React, { createContext, useEffect, useState, useContext } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { createActor, canisterId } from '../../declarations/NCA_backend/';

const AuthContext = createContext();

const defaultOptions = {
    createOptions: {
        idleOptions: {
            disableIdle: true,
        },
    },
    loginOptions: {
        identityProvider: "",
    },
};

export const useAuthClient = (options = defaultOptions) => {
    const [isAuth, setIsAuth] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [identity, setIdentity] = useState(null);
    const [principal, setPrincipal] = useState(null);
    const [callFunction, setCallFunction] = useState(null);

    // Initialize AuthClient on mount
    useEffect(() => {
        const initializeAuthClient = async () => {
            try {
                const client = await AuthClient.create(options.createOptions);
                updateClient(client);
            } catch (error) {
                console.error("Error creating AuthClient:", error);
            }
        };
        initializeAuthClient();
    }, []);

    // Update client state and set identity
    const updateClient = async (client) => {
        try {
            const isAuthenticated = await client.isAuthenticated();
            setIsAuth(isAuthenticated);

            if (isAuthenticated) {
                const identity = client.getIdentity();
                const principal = identity.getPrincipal();

                setIdentity(identity);
                setPrincipal(principal);
                setAuthUser(client);

                const actor = createActor(canisterId, {
                    agentOptions: {
                        identity,
                    },
                });

                setCallFunction(actor);
            } else {
                resetAuthState();
            }
        } catch (error) {
            console.error("Error updating AuthClient:", error);
        }
    };

    // Reset the authentication state
    const resetAuthState = () => {
        setIdentity(null);
        setPrincipal(null);
        setAuthUser(null);
        setCallFunction(null);
    };

    // Login function
    const login = async () => {
        if (authUser) {
            try {
                await authUser.login({
                    ...options.loginOptions,
                    onSuccess: () => {
                        updateClient(authUser);
                    },
                    onError: (error) => {
                        console.error("Login failed:", error);
                    },
                });
            } catch (error) {
                console.error("Error logging in:", error);
            }
        }
    };

    // Logout function
    const logout = async () => {
        try {
            if (authUser) {
                await authUser.logout();
                resetAuthState();
            }
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return {
        isAuth,
        login,
        logout,
        authUser,
        identity,
        principal,
        callFunction,
    };
};

export const AuthProvider = ({ children }) => {
    const auth = useAuthClient();
    
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
