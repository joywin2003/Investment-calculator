function InputGroup({ currentSaving, yearlyContribution }) {
  return (
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          type="number"
          id="current-savings"
          value={currentSaving}
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          value={yearlyContribution}
        />
      </p>
    </div>
  )
}

export default InputGroup;