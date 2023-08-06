import Header from "./compenents/Header";
import Table from "./compenents/Table";
import Form from "./compenents/Form";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    }
    const yearlyData = []; 


    if(userInput){
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
      });}
  };
  return (
    <div>
      <Header />
      <Form
        onCalculate = {calculateHandler}
      />
      {!userInput && <p style = {{textAlign:"center",fontSize:"1.5rem"}}>No Investment calculated</p>}
      {userInput &&<Table data={yearlyData} initial = {userInput["current-savings"]}/>}
    </div>
  );
}

export default App;
