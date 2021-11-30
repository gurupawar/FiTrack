import { useState, useEffect } from "react";
import { ProjectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = (email, password) => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async () => {
    setError(null);
    setIsPending(true);

    //Login user
    try {
      const res = await ProjectAuth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "LOG_IN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { login, isPending, error };
};
