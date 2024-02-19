import React, { useContext } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../context/Context";

export const ThirdQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()
  const { currentPage, goToPage } = useContext(PageContext)

  const nextPage = () => {
    goToPage(currentPage + 1)
    navigate('/question4')
  }

  return (
    <div className="container">
      <ProgressBar />
      <h1>{translation("thirdQuestion.title")}</h1>
      <div className="textButtons">
        <button 
          className="textButton"
          onClick={() => nextPage()}
        >
          {translation("thirdQuestion.option1")}
        </button>
        <button 
          className="textButton"
          onClick={() => nextPage()}
        >
          {translation("thirdQuestion.option2")}
        </button>
        <button
          className="textButton"
          onClick={() => nextPage()}
        >
          {translation("thirdQuestion.option3")}
        </button>
        <button
          className="textButton"
          onClick={() => nextPage()}
        >
          {translation("thirdQuestion.option4")}
        </button>
      </div>      
    </div>
    )
    
}
