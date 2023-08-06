
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
function Table({ data, initial}) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return(
          <tr key={index}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>{formatter.format(item.savingsEndOfYear-initial-item.yearlyContribution*item.year)}</td>
            <td>{formatter.format(item.yearlyContribution*item.year)}</td>
          </tr>
        );
        })}
      </tbody>
    </table>
  )
}

export default Table;