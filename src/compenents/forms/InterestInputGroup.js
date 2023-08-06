function InterestInputGroup({ expectedInterest, investmentDuration, setExpectedInterest, setInvestmentDuration}) {
  return (
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input
          type="number"
          id="expected-return"
          value={expectedInterest}
          onChange={(e) => setExpectedInterest(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          type="number"
          id="duration"
          value={investmentDuration}
          onChange={(e) => setInvestmentDuration(e.target.value)}
        />
      </p>
    </div>
  )
}
export default InterestInputGroup;