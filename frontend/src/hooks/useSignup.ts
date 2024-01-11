import { useState } from 'react';

export const useSignup = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (username: string, email: string, password: string) => {
    setIsLoading(true);
    setError(false);

    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json));
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
