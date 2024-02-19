import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

export const FourthQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const [selectedOptions, setSelectedOptions] = useState([])
  const navigate = useNavigate()

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== optionValue));
    }
  };


  return (
    <div className="container">
      <ProgressBar />
      <h1 dangerouslySetInnerHTML={{ __html: translation("fourthQuestion.title") }} />
      <div>
      <label className="checkButton">
      {translation("fourthQuestion.option1")}
        <input
          className=""
          type="checkbox"
          value="option1"
          onChange={handleOptionChange}
          checked={selectedOptions.includes("option1")}
        />
        
      </label>
      <br />
      <label className="checkButton">
      {translation("fourthQuestion.option2")}
        <input
          type="checkbox"
          value="option2"
          onChange={handleOptionChange}
          checked={selectedOptions.includes("option2")}
        />
        
      </label>
      <br />
      <label className="checkButton">
      {translation("fourthQuestion.option3")}
        <input
          type="checkbox"
          value="option3"
          onChange={handleOptionChange}
          checked={selectedOptions.includes("option3")}
        />
        
      </label>
      <br />
      <label className="checkButton">
      {translation("fourthQuestion.option4")}
        <input
          type="checkbox"
          value="option4"
          onChange={handleOptionChange}
          checked={selectedOptions.includes("option4")}
        />
       
      </label>
      <br />
      <button 
        className={selectedOptions.length > 0 ? `nextButton` : `nextButton_blocked`}
        disabled={selectedOptions.length > 0 ? false : true} 
        onClick={() => console.log(selectedOptions)}
      >
        {translation("fourthQuestion.buttonText")}
      </button>
      </div>

    </div>
    )
    
}
