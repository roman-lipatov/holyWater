import React from "react";
import { FirstQuestion } from "./steps/FirstQuestion";
import "./styles/Form.scss"

export const Form = () => {
    return (
        <div className="form">
        <FirstQuestion />
        </div>
    )
}