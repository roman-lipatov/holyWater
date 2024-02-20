import React, { useContext, useState, useEffect } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../context/Context";

export const FifthQuestion = () => {
    const [translation, i18n] = useTranslation("global");
    const { currentPage, goToPage } = useContext(PageContext);
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState([]);
    const maxSelections = 3;

    const [topics, setTopics] = useState({
        order: 5,
        title: "What are your favorite topics?",
        type: "buble",
        answer: [],
      });

      let ageQuizObj = JSON.parse(localStorage.getItem('ageQuiz'));

      const handleOptionClick = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter(item => item !== option));
        } else if (selectedOptions.length < maxSelections) {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const nextPage = () => {
        setTopics((prevBadTopics) => ({
            ...prevBadTopics,
            answer: selectedOptions,
          }));

          const updatedTopics = {
            ...topics,
            answer: selectedOptions,
          };

          localStorage.setItem("selectedTopicsQuiz", JSON.stringify(updatedTopics));

          navigate('/loader')
    }

    return (
      <div className="container">
        <ProgressBar />
        <h1>{translation("fifthQuestion.title")}</h1>
        <h2>{translation("fifthQuestion.subTitle")}</h2>

        <div className="emojiButtons">
          <div className="firstSection">
            {ageQuizObj.answer.includes('30-39') ? (
               <button 
                className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option8")) ? 'selected' : ''}`}
                onClick={() => handleOptionClick(translation("fifthQuestion.option8"))}
              > <span className="emojiButton_emoji">🇺🇦</span>
                {translation("fifthQuestion.option8")}
              </button>
            ) : ( <button 
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option1")) ? 'selected' : ''}`}
             onClick={() => handleOptionClick(translation("fifthQuestion.option1"))}
           > <span className="emojiButton_emoji">🐺</span>
             {translation("fifthQuestion.option1")}
           </button>)}
           
            <button 
               className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option2")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option2"))}
            > <span className="emojiButton_emoji">🥰</span>
              {translation("fifthQuestion.option2")}
            </button>
          </div>
          <div className="secondSection">
            {ageQuizObj.answer.includes('18-29') ? (
              <button
                className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option9")) ? 'selected' : ''}`}
                onClick={() => handleOptionClick(translation("fifthQuestion.option9"))}
              > <span className="emojiButton_emoji">🦹‍♂️</span>
                {translation("fifthQuestion.option9")}
              </button>
            ) : (
            <button
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option3")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option3"))}
            > <span className="emojiButton_emoji">💃</span>
              {translation("fifthQuestion.option3")}
            </button>
            )}
            
            <button 
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option4")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option4"))}
            > <span className="emojiButton_emoji">💁‍♀️</span>
              {translation("fifthQuestion.option4")}
            </button>
          </div>

          <div className="thirdSection">
          {ageQuizObj.answer.includes('40-49') ? (
            <button 
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option10")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option10"))}
            > <span className="emojiButton_emoji">🛠</span>
              {translation("fifthQuestion.option10")}
            </button>
          ) : (
            <button 
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option5")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option5"))}
            > <span className="emojiButton_emoji">👑</span>
              {translation("fifthQuestion.option5")}
            </button>
          )}
            <button
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option6")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option6"))}
            > <span className="emojiButton_emoji">🤠</span>
              {translation("fifthQuestion.option6")}
            </button>
          </div>
          <div className="fourthSection">
            <button
              className={`emojiButton ${selectedOptions.includes(translation("fifthQuestion.option7")) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(translation("fifthQuestion.option7"))}
            > <span className="emojiButton_emoji">🤑</span>
              {translation("fifthQuestion.option7")}
            </button>
          </div>
        </div>      
        <button
          className={selectedOptions.length > 0 ? `nextButton` : `nextButton_blocked`}
          disabled={selectedOptions.length > 0 ? false : true}
          onClick={() => nextPage()}
        >
          {translation("fifthQuestion.buttonText")}
        </button>
      </div>
    
    )
}
