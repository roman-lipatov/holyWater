import React, { useContext, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import "../styles/CommonStyles.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PageContext } from "../context/Context";

export const FourthQuestion = () => {
  const [translation, i18n] = useTranslation("global");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [count, setCount] = useState(0)
  const { currentPage, goToPage } = useContext(PageContext);
  const navigate = useNavigate();
  const [badTopics, setBadTopics] = useState({
    order: 4,
    title: "What do you hate the most in a book?",
    type: "multiple-select",
    answer: [],
  });

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;
    const isChecked = e.target.checked;
    const label = e.target.parentNode.dataset.label;

    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionValue]: isChecked ? label : undefined,
    }));

    if(isChecked) {
      setCount(count + 1)
    } else if (!isChecked) {
      setCount(count - 1)
    }
  };


  const nextPage = () => {
    goToPage(currentPage + 1);

     const nonEmptyLabels = Object.values(selectedOptions).filter((label) => label !== undefined);

    setBadTopics((prevBadTopics) => ({
      ...prevBadTopics,
      answer: nonEmptyLabels,
    }));

    const updatedTopics = {
      ...badTopics,
      answer: nonEmptyLabels,
    };

    localStorage.setItem("selectedOptionsQuiz", JSON.stringify(updatedTopics));

    navigate('/question5')
  };

  return (
    <div className="container" style={{fontFamily:"Albert, sans-serif"}}>
      <ProgressBar />
      <h1 dangerouslySetInnerHTML={{ __html: translation("fourthQuestion.title") }} />
      <div>
        <label className="checkButton" data-label={translation("fourthQuestion.option1")}>
          {translation("fourthQuestion.option1")}
          <input
            className=""
            name=""
            type="checkbox"
            value="option1"
            onChange={handleOptionChange}
            checked={selectedOptions["option1"] !== undefined}
          />
        </label>
        <br />
        <label className="checkButton" data-label={translation("fourthQuestion.option2")}>
          {translation("fourthQuestion.option2")}
          <input
            type="checkbox"
            value="option2"
            onChange={handleOptionChange}
            checked={selectedOptions["option2"] !== undefined}
          />
        </label>
        <br />
        <label className="checkButton" data-label={translation("fourthQuestion.option3")}>
          {translation("fourthQuestion.option3")}
          <input
            type="checkbox"
            value="option3"
            onChange={handleOptionChange}
            checked={selectedOptions["option3"] !== undefined}
          />
        </label>
        <br />
        <label className="checkButton" data-label={translation("fourthQuestion.option4")}>
          {translation("fourthQuestion.option4")}
          <input
            type="checkbox"
            value="option4"
            onChange={handleOptionChange}
            checked={selectedOptions["option4"] !== undefined}
          />
        </label>
        <br />
        <button
          className={count > 0 ? `nextButton` : `nextButton_blocked`}
          disabled={count > 0 ? false : true}
          onClick={() => nextPage()}
        >
          {translation("fourthQuestion.buttonText")}
        </button>
      </div>
    </div>
  );
};
