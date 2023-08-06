import InputGroup from "./forms/Inputgroup";
import InterestInputGroup from "./forms/InterestInputGroup";
import Action from "./forms/Action";
import '../index.css';
import { useState } from "react";


function Form() {
    const [currentSaving, setCurrentSaving] = useState(0);
    const [yearlyContribution, setYearlyContribution] = useState(0);
    const [expectedInterest, setExpectedInterest] = useState(0);
    const [investmentDuration, setInvestmentDuration] = useState(0);
    const [takeAction, setTakeAction] = useState(false);

    

    return (
        <form className="form" >
            <InputGroup
                currentSaving={currentSaving}
                yearlyContribution={yearlyContribution} />
            <InterestInputGroup 
                expectedInterest={expectedInterest}
                investmentDuration={investmentDuration}
            />

            <Action />
        </form>
    )
}
export default Form;