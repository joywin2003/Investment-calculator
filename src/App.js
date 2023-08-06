import Header from "./compenents/Header";
import Table from "./compenents/Table";
import Form from "./compenents/Form";
import { useState } from "react";

function App() {
  const [currentSaving, setCurrentSaving] = useState();
  const [yearlyContribution, setYearlyContribution] = useState();
  const [expectedInterest, setExpectedInterest] = useState();
  const [investmentDuration, setInvestmentDuration] = useState();
  const [takeAction, setTakeAction] = useState(false);
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    for (let i = 0; i < investmentDuration; i++) {
      const yearlyInterest = currentSaving * expectedInterest;
      currentSaving += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSaving,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyData);
    setCurrentSaving();
    setYearlyContribution();
    setExpectedInterest();
    setInvestmentDuration();
  };
  return (
    <div>
      <Header />
      <Form
        currentSaving={currentSaving}
        setCurrentSaving={setCurrentSaving}
        yearlyContribution={yearlyContribution}
        setYearlyContribution={setYearlyContribution}
        expectedInterest={expectedInterest}
        setExpectedInterest={setExpectedInterest}
        investmentDuration={investmentDuration}
        setInvestmentDuration={setInvestmentDuration}
        takeAction={takeAction}
        setTakeAction={setTakeAction}
        calculateHandler = {calculateHandler}
      />
      <Table data={yearlyData}/>
    </div>
  );
}

export default App;
