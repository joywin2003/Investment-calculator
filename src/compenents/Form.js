import InputGroup from "./forms/Inputgroup";
import InterestInputGroup from "./forms/InterestInputGroup";
import Action from "./forms/Action";
import '../index.css';
import { useState } from "react";


function Form() {
    const [currentSaving, setCurrentSaving] = useState();
    const [yearlyContribution, setYearlyContribution] = useState();
    const [expectedInterest, setExpectedInterest] = useState();
    const [investmentDuration, setInvestmentDuration] = useState();
    const [takeAction, setTakeAction] = useState(false);

    const calculateHandler = (userInput) => {
        setCurrentSaving();
        setYearlyContribution();
        setExpectedInterest();
        setInvestmentDuration();
      };

    return (
        <form className="form" >
            <InputGroup
                currentSaving={currentSaving}
                yearlyContribution={yearlyContribution} 
                setCurrentSaving = {setCurrentSaving}
                setYearlyContribution = {setYearlyContribution}
                />
            <InterestInputGroup 
                expectedInterest={expectedInterest}
                investmentDuration={investmentDuration}
                setExpectedInterest = {setExpectedInterest}
                setInvestmentDuration= {setInvestmentDuration}
            />

            <Action onClick={calculateHandler}/>
        </form>
    )
}
export default Form;