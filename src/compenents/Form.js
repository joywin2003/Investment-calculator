import InputGroup from "./forms/Inputgroup";
import InterestInputGroup from "./forms/InterestInputGroup";
import Action from "./forms/Action";
import '../index.css';
import { useState } from "react";


const initialUserInput = {
    "current-savings": 50000,
    "yearly-contribution": 5000,
    "expected-return": 7,
    "duration": 5,
}

function Form(props) {
    const [userInput, setUserInput] = useState(initialUserInput);
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
    }
    const resetHandler = (e) => {
        setUserInput(initialUserInput);
    }
    const inputSubmitHandler = (input,value) => {
        setUserInput((prevInput) =>{
            return{
                ...prevInput,
                [input]:value,
            }}
        )
    }

    const {
        currentSaving,
        setCurrentSaving,
        yearlyContribution,
        setYearlyContribution,
        expectedInterest,
        setExpectedInterest,
        investmentDuration,
        setInvestmentDuration,
        takeAction,
        setTakeAction,
        calculateHandler,
    } = props;
    return (
        <form onSubmit={submitHandler} className="form">
            <div className="input-group">
                <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input
                    type="number"
                    id="current-savings"
                    onChange={(e) => inputSubmitHandler("current-savings",e.target.value)}
                    value={userInput["current-savings"]}
                />
                </p>
                <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input
                    type="number"
                    id="yearly-contribution"
                    value={userInput["yearly-contribution"]}
                    onChange={(e) => inputSubmitHandler("yearly-contribution",e.target.value)}
                />
                </p>
            </div>
            <div className="input-group">
                <p>
                <label htmlFor="expected-return">Expected Interest (% per year)</label>
                <input
                    type="number"
                    id="expected-return"
                    value={userInput["expected-return"]}
                    onChange={(e) => inputSubmitHandler("expected-return",e.target.value)}
                />
                </p>
                <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input
                    type="number"
                    id="duration"
                    value={userInput["duration"]}
                    onChange={(e) => inputSubmitHandler("duration",e.target.value)}
                />
                </p>
            </div>
            <p className="actions">
                <button
                    type="reset"
                    className="buttonAlt"
                    onClick={resetHandler}
                >
                Reset
                </button>
                <button type="submit" className="button">
                Calculate
                </button>
            </p>
</form>
    )
}
export default Form;