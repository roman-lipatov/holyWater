import React, { useContext, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../context/Context";

export const SecondQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()
  const { currentPage, goToPage } = useContext(PageContext)
  const [gender, setGender] = useState({
    order: 2,
    title: "What gender do you identify with?",
    type: "single-select-image",
    answer: ""
  })
  const nextPage = (option) => {
    goToPage(currentPage + 1)

    setGender(prevGender => ({
      ...prevGender,
      answer: option
    }));

    const updatedGender = {
      ...gender,
      answer: option
    };

    localStorage.setItem('genderQuiz', JSON.stringify(updatedGender))

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
          onClick={() => nextPage(translation("secondQuestion.option1"))}
        > <span className="iconButton_icon">👩</span>
          {translation("secondQuestion.option1")}
        </button>
        <button 
          className="iconButton"
          onClick={() => nextPage(translation("secondQuestion.option2"))}
        > <span className="iconButton_icon">👨</span>
          {translation("secondQuestion.option2")}
        </button>
        <button
          className="iconButton"
          onClick={() => nextPage(translation("secondQuestion.option3"))}
        > <span className="iconButton_icon">😉</span>
          {translation("secondQuestion.option3")}
        </button>
      </div>      
    </div>
    )
    
}
