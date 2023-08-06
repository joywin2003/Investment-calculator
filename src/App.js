import Header from "./compenents/Header";
import Table from "./compenents/Table";
import Form from "./compenents/Form";
import { useState } from "react";

function App() {
  const calculateHandler = (userInput) => {

    const yearlyData = []; 

    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };
  return (
    <div>
      <Header />
      <Form
        onCalculate = {calculateHandler}
      />
      <Table data={yearlyData}/>
    </div>
  );
}

export default App;
