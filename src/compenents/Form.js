import InputGroup from "./forms/Inputgroup";
import InterestInputGroup from "./forms/InterestInputGroup";
import Action from "./forms/Action";
import '../index.css';
import { useState } from "react";


function Form(props) {
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
        <form className="form" >
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
            <Action onClick={calculateHandler} />
        </form>
    )
}
export default Form;