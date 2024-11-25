import { useAuth } from "../component/context/AuthContext";

export const useLogin = () => {
  const { login } = useAuth();

  return async () => {
    try {
      await login();
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed", error);
    }
  };
};
