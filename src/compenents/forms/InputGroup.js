function InputGroup({ currentSaving, yearlyContribution,setCurrentSaving,setYearlyContribution }) {
  return (
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          type="number"
          id="current-savings"
          value={currentSaving}
          onChange={(e) => setCurrentSaving(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          value={yearlyContribution}
          onChange={(e) => setYearlyContribution(e.target.value)}
        />
      </p>
    </div>
  )
}

export default InputGroup;