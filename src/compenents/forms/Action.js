function Action({ onClick,setTakeAction }) {
  return (
    <p className="actions">
      <button
        type="reset"
        className="buttonAlt"
        onClick={()=>setTakeAction(false)}>
        Reset
      </button>
      <button
        type="submit"
        className="button"
        onClick={() => {
          onClick();
          setTakeAction(true);
        }}
          >
        Calculate
      </button>
    </p>
  )
}
export default Action;