import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

 export const ExternalRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTo = '/holywater';
    navigate(redirectTo);
  }, [navigate]);

  return <div>Redirecting...</div>;
};
