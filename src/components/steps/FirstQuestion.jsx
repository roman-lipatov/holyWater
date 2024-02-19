import React, { useContext } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../context/Context";

export const FirstQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()
  const { currentPage, goToPage } = useContext(PageContext)

  const languageSelect = (lang) => {
    i18n.changeLanguage(lang)
    goToPage(currentPage + 1)
    navigate('/question2')
  }

  return (
    <div className="container">
      <ProgressBar />
      <h1>{translation("firstQuestion.title")}</h1>
      <h2>{translation("firstQuestion.subTitle")}</h2>
      <div className="textButtons">
        <button 
          className="textButton"
          onClick={() => languageSelect("en")}
        >
          {translation("firstQuestion.option1")}
        </button>
        <button 
          to="/question2"
          className="textButton"
          onClick={() => languageSelect("fr")}
        >
          {translation("firstQuestion.option2")}
        </button>
        <button
          to="/question2"
          className="textButton"
          onClick={() => languageSelect("ger")}
        >
          {translation("firstQuestion.option3")}
        </button>
        <button
          to="/question2"
          className="textButton"
          onClick={() => languageSelect("es")}
        >
          {translation("firstQuestion.option4")}
        </button>
      </div>      
    </div>
    )
    
}
