function Action({ onClick }) {
  return (
    <p className="actions">
      <button
        type="reset"
        className="buttonAlt"
        onClick={onClick}>
        Reset
      </button>
      <button
        type="submit"
        className="button"
        onChange={onClick}>
        Calculate
      </button>
    </p>
  )
}
export default Action;