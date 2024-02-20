import React, { useContext, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../context/Context";

export const FirstQuestion = () => {
  const [language, setLanguage] = useState({
    order: 1,
    title: "What is your preferred language?",
    type: "single-select",
    answer: ""
  })
  const { currentPage, goToPage } = useContext(PageContext)
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()

  const languageSelect = (lang, option) => {
    i18n.changeLanguage(lang)

    setLanguage(prevLanguage => ({
      ...prevLanguage,
      answer: option
    }));

    const updatedLanguage = {
      ...language,
      answer: option
    };

    localStorage.setItem('languageQuiz', JSON.stringify(updatedLanguage))

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
          onClick={() => languageSelect("en", translation("firstQuestion.option1"))}
        >
          {translation("firstQuestion.option1")}
        </button>
        <button 
          to="/question2"
          className="textButton"
          onClick={() => languageSelect("fr", translation("firstQuestion.option2"))}
        >
          {translation("firstQuestion.option2")}
        </button>
        <button
          to="/question2"
          className="textButton"
          onClick={() => languageSelect("ger", translation("firstQuestion.option3"))}
        >
          {translation("firstQuestion.option3")}
        </button>
        <button
          to="/question2"
          className="textButton"
          onClick={() => languageSelect("es", translation("firstQuestion.option4"))}
        >
          {translation("firstQuestion.option4")}
        </button>
      </div>      
    </div>
    )
    
}
