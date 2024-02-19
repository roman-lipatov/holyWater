import React, { useContext } from 'react';
import { PageContext } from '../context/Context';
import {useNavigate} from 'react-router-dom';
import "../styles/ProgressBar.scss"

export const ProgressBar = () => {
    const { currentPage, goToPage } = useContext(PageContext)
    const navigate = useNavigate();
    const prevPage = () => {
        if(currentPage > 1) {
            navigate(-1);
            goToPage(currentPage - 1)
        }
    }

    const percent = currentPage * 100;

    const background = {
        backgroundColor: '#E8EAF2',
        height: 4,
        width: 500,
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
                    visibility: currentPage <=1 ? "hidden" : "visible"
                }}
                onClick={prevPage}
              />
              <span>
                <span style={{color:"#E4229C"}}>{currentPage}</span>/5
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