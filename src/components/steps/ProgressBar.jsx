import React, { useState, useEffect } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import "../styles/ProgressBar.scss"

export const ProgressBar = () => {
  const location = useLocation();
  const [currentNumber, setCurrentNumber] = useState(1)

    const navigate = useNavigate();
    
    useEffect(() => {
      const pathSegments = location.pathname.split('');
      const lastSegment = +pathSegments[pathSegments.length - 1];
  
      if (!isNaN(lastSegment)) {
        setCurrentNumber(lastSegment);
      }
    }, [location.pathname]);

    const prevPage = () => {
      if (currentNumber > 1) {
        setCurrentNumber(prevNumber => prevNumber - 1);
        navigate(-1);
    }
    }

    const percent = (currentNumber * 375) / 5;

    const background = {
        backgroundColor: '#E8EAF2',
        height: 4,
        width: 375,
        borderRadius: 20,
    }

    const progress = {
        backgroundColor: '#E4229C',
        height: 4,
        width: percent,
        borderRadius: 100,
    }
    return(
        <div className="bar">
            <div className='topBar'>
              <div 
                className='arrow'
                style={{
                    visibility: currentNumber <=1 ? "hidden" : "visible"
                }}
                onClick={prevPage}
              />
              <span>
                <span style={{color:"#E4229C"}}>{currentNumber}</span>/5
              </span>
              <div className='dots'>
                <div className='dot'/>
                <div className='dot'/>
                <div className='dot'/>
              </div>
            </div>
          
          <div style={background}>
            <div style={progress} />
          </div>

        </div>
    )
}