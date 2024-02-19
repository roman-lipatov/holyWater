import React, { useContext } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../context/Context";

export const SecondQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()
  const { currentPage, goToPage } = useContext(PageContext)
  const nextPage = () => {
    goToPage(currentPage + 1)
    navigate('/question3')
  }
 
  return (
    <div className="container">
      <ProgressBar />
      <h1>{translation("secondQuestion.title")}</h1>
      <h2>{translation("secondQuestion.subTitle")}</h2>
      <div className="iconButtons">
        <button 
          className="iconButton"
          onClick={() => nextPage()}
        > <span className="iconButton_icon">👩</span>
          {translation("secondQuestion.option1")}
        </button>
        <button 
          className="iconButton"
          onClick={() => nextPage()}
        > <span className="iconButton_icon">👨</span>
          {translation("secondQuestion.option2")}
        </button>
        <button
          className="iconButton"
          onClick={() => nextPage()}
        > <span className="iconButton_icon">😉</span>
          {translation("secondQuestion.option3")}
        </button>
      </div>      
    </div>
    )
    
}
