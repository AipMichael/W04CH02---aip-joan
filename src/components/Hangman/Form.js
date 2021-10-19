import PropTypes from "prop-types";

const Form = ({ text, actionOnClick, maxNumber, func }) => {
  return (
    <>
      <button onClick={actionOnClick}>{text}</button>
      <input maxLength={maxNumber} onChange={func}></input>
    </>
  );
  /*   Button.propTypes = {
    text: PropTypes.string.isRequired,
  }; */
};

export default Form;
