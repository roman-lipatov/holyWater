import React,{ useState, useEffect } from "react";
import "../styles/CommonStyles.scss"
import { useTranslation } from "react-i18next";
import doneImage from "../../images/done.png"
import downloadImage from "../../images/download.png"

export const FinishPage = () => {
    const [translation, i18n] = useTranslation("global");
    const [quizData, setQuizData] = useState([]);

    useEffect(() => {
      const storedData = Object.keys(localStorage)
        .filter((key) => key.includes("Quiz"))
        .map((key) => {
          const quizData = JSON.parse(localStorage.getItem(key));
          return quizData;
        })
        .sort((a, b) => a.order - b.order);
  
      setQuizData(storedData);
  }, []);

  const handleRetakeQuiz = () => {
    localStorage.clear();
    const isGitHubPages = window.location.hostname.includes("github.io");
    
    
    if (isGitHubPages) {
        window.location.href = "https://roman-lipatov.github.io/";
    } else {
        window.location.href = "/";
    }
}

    const generateCSV = () => {
      const csvContent =
        "order;title;" +
        "type;answer\n" +
        quizData
          .map((data) =>
            `${data.order};"${data.title}";"${data.type}";"${Array.isArray(data.answer) ? data.answer.join(', ') : data.answer}"`
          )
          .join("\n");
  
      const blob = new Blob([csvContent], { type: "text/csv" });
  
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute("download", "quiz_results.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <div className="container" style={{paddingTop:"110px"}}>
        <h1 style={{fontFamily:"Niconne, sans-serif", fontSize:"45px", fontWeight:"400", margin: 0}}>{translation("finishPage.title")}</h1>
        <h2>{translation("finishPage.subTitle")}</h2>
        <img src={doneImage} style={{paddingTop:"40px"}}/>
        <div className="download">
        <img src={downloadImage} style={{width:"42px", height:"42px"}}/>
        <p onClick={generateCSV}>{translation("finishPage.download")}</p>
        </div>
        <button
          className="nextButton"
          onClick={() => handleRetakeQuiz()}
        >
          {translation("finishPage.buttonText")}
        </button>
      </div>
    )
}
