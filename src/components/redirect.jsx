import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

 export const ExternalRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTo = '/question1';
    navigate(redirectTo);
  }, [navigate]);

  return <div>Redirecting...</div>;
};
