import PropTypes from "prop-types";

const Button = ({ text, actionOnClick }) => {
  return <button onClick={actionOnClick}>{text}</button>;
  Button.propTypes = {
    text: PropTypes.string.isRequired,
  };
};

export default Button;
