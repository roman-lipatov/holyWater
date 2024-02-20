import React, { useContext, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { PageContext } from "../context/Context";

export const ThirdQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()
  const { currentPage, goToPage } = useContext(PageContext)
  const [age, setAge] = useState({
    order: 3,
    title: "What is your age?",
    type: "single-select",
    answer: ""
  })

  const nextPage = (option) => {
    goToPage(currentPage + 1)

    setAge(prevAge => ({
      ...prevAge,
      answer: option
    }));

    const updatedAge = {
      ...age,
      answer: option
    };

    localStorage.setItem('ageQuiz', JSON.stringify(updatedAge))


    navigate('/question4')
  }

  return (
    <div className="container" style={{fontFamily:"Albert, sans-serif"}}>
      <ProgressBar />
      <h1>{translation("thirdQuestion.title")}</h1>
      <div className="textButtons">
        <button 
          className="textButton"
          onClick={() => nextPage(translation("thirdQuestion.option1"))}
        >
          {translation("thirdQuestion.option1")}
        </button>
        <button 
          className="textButton"
          onClick={() => nextPage(translation("thirdQuestion.option2"))}
        >
          {translation("thirdQuestion.option2")}
        </button>
        <button
          className="textButton"
          onClick={() => nextPage(translation("thirdQuestion.option3"))}
        >
          {translation("thirdQuestion.option3")}
        </button>
        <button
          className="textButton"
          onClick={() => nextPage(translation("thirdQuestion.option4"))}
        >
          {translation("thirdQuestion.option4")}
        </button>
      </div>      
    </div>
    )
    
}
