function InterestInputGroup({ expectedInterest, investmentDuration }) {
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
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          type="number"
          id="duration"
          value={investmentDuration}
        />
      </p>
    </div>
  )
}
export default InterestInputGroup;