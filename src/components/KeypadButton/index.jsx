import PropTypes from "prop-types";

import Button from "./styled";

function KeypadButton({ value, onSelectElement }) {
  return <Button onClick={onSelectElement}>{value}</Button>;
}

export default KeypadButton;

KeypadButton.propTypes = {
  onSelectElement: PropTypes.func,
  value: PropTypes.string,
};
