import InputGroup from "./forms/Inputgroup";
import InterestInputGroup from "./forms/InterestInputGroup";
import Action from "./forms/Action";
import '../index.css';
import { useState } from "react";


function Form(props) {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted");
    }
    const resetHandler = (e) => {
        e.preventDefault();
        console.log("reset");
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
        <form onSubmit= {submitHandler} className="form" >
            <InputGroup
                currentSaving={currentSaving}
                yearlyContribution={yearlyContribution}
                setCurrentSaving={setCurrentSaving}
                setYearlyContribution={setYearlyContribution}
            />
            <InterestInputGroup
                expectedInterest={expectedInterest}
                investmentDuration={investmentDuration}
                setExpectedInterest={setExpectedInterest}
                setInvestmentDuration={setInvestmentDuration}
            />
            <Action
                setTakeAction={setTakeAction}
                onClick={calculateHandler} />
        </form>
    )
}
export default Form;