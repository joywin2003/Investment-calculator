

function Table({ data }) {
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
            <td>{item.savingsEndOfYear}</td>
            <td>{item.yearlyInterest}</td>
            <td>{item.yearlyContribution}</td>
          </tr>
        );
        })}
      </tbody>
    </table>
  )
}

export default Table;