import React, { useState }from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import "../styles/CommonStyles.scss"

export const EmailPage = () => {
  const [translation, i18n] = useTranslation("global");
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handleSubmit = () => {
    const emailObject = {
      order: 6,
      title: "Email",
      type: "email",
      answer: email 
    }
    if (isValidEmail) {
      localStorage.setItem("emailQuiz", JSON.stringify(emailObject));
      navigate("/finishPage");
    } else {
      console.log("Enter valid email");
    }
  };

    return (
      <div className="container" style={{paddingTop:"110px", fontFamily:"Albert, sans-serif"}}>
        <h1 style={{fontSize: "30px"}}>{translation("emailPage.title")}</h1>
        <h2 style={{fontWeight:"500", fontSize:"15px", marginBottom:"50px"}}>{translation("emailPage.subTitle")}</h2>
        <div className="inputEmail">
            <label>
            <input
            className={!isValidEmail ? "invalid" : ""}
            name=""
            type="email"
            value={email}
            placeholder={translation("emailPage.email")}
            onChange={handleEmailChange}
          />
            </label>

            {!isValidEmail && (
          <p style={{ color: "red", fontSize: "12px" }}>
            Invalid email
          </p>
        )}

            <p className="emailText" dangerouslySetInnerHTML={{ __html: translation("emailPage.agreement")}} />
        </div>
        <button
          className={isValidEmail ? `nextButton` : `nextButton_blocked`}
          disabled={isValidEmail ? false : true}
          onClick={() => handleSubmit()}
        >
          {translation("emailPage.buttonText")}
        </button>
      </div>
    )
}
