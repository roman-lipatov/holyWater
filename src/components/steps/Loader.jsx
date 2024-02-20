import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import '../styles/Loader.scss';
import '../styles/CommonStyles.scss'

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval);
        navigate('/email');
      }
    }, 50);
    return () => clearInterval(interval);
  }, [progress, navigate]);

  return (
    <div className='container'>
    <div className="loader-container">
      <div className="loader">
        <svg className="progress" viewBox="0 0 100 100">
          <circle className="bg" cx="50" cy="50" r="40"></circle>
          <circle
            className={`fill ${progress === 100 ? '' : 'active'}`}
            cx="50"
            cy="50"
            r="40"
            style={{
              strokeDasharray: 251.327,
              strokeDashoffset: (251.327 * (100 - progress)) / 100 
            }}
          ></circle>    
        </svg>
      </div>
      <div className="progress-text">{progress}%</div>
    </div>
    <p className="loader-text">
      {translation("loaderPage.title")}
    </p>
    </div>
  );
};
