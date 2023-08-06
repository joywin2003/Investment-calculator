function Investment({ data }) {
  return (
    <tbody>
      {data.map((item, index) => {
        <tr key={index}>
          <td>{item.year}</td>
          <td>{item.savingsEndOfYear}</td>
          <td>{item.yearlyInterest}</td>
          <td>{item.yearlyContribution}</td>
        </tr>
      })}
    </tbody>
  )
}

export default Investment;