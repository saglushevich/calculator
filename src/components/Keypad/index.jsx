import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import KeypadButton from "@components/KeypadButton/index";
import { KEYPAD_BUTTONS, KEYPAD_ACTIONS } from "@constants";
import {
  updateExpression,
  setInvalidInputFormat,
  setInputValue,
} from "@store/actions/actions";

import KeypadContainer from "./styled";

function Keypad({ onEqual }) {
  const dispatch = useDispatch();

  const expression = useSelector((state) => state.expression);
  const input = useSelector((state) => state.inputValue);

  const onInputNumber = (value) => {
    if (input === "0") {
      dispatch(setInputValue(value));
    } else if (isNaN(input)) {
      dispatch(setInputValue(value));
      dispatch(updateExpression(expression.concat(input)));
    } else {
      dispatch(setInputValue(input.concat(value)));
    }
  };

  const onInputPoint = (value) => {
    if (isNaN(input)) {
      dispatch(setInputValue(`0${value}`));
      dispatch(updateExpression(expression.concat(input)));
    } else if (!input.includes(value)) {
      dispatch(setInputValue(input.concat(value)));
    }
  };

  const onInputOperator = (value) => {
    if (
      input === "+" ||
      input === "-" ||
      input === "*" ||
      input === "%" ||
      input === "/"
    ) {
      dispatch(setInputValue(value));
    } else if (input !== "(") {
      dispatch(setInputValue(value));
      dispatch(updateExpression(expression.concat(input)));
    }
  };

  const onSelectElement = (value) => () => {
    dispatch(setInvalidInputFormat(false));

    if (value.match(/\d/)) {
      onInputNumber(value);
    } else if (value.match(/[+\-*/%]/)) {
      onInputOperator(value);
    } else if (value === "(" || value === ")") {
      if (input === "0") {
        dispatch(setInputValue(value));
      } else {
        dispatch(setInputValue(value));
        dispatch(updateExpression(expression.concat(input)));
      }
    } else {
      onInputPoint(value);
    }
  };

  const onChangeSign = () => {
    if (!isNaN(input)) {
      dispatch(setInputValue(input * -1 + ""));
    }
  };

  const onClearExpression = () => {
    dispatch(updateExpression([]));
    dispatch(setInputValue("0"));
    dispatch(setInvalidInputFormat(false));
  };

  const buttons = KEYPAD_BUTTONS.map((item) => {
    switch (item.id) {
      case KEYPAD_ACTIONS.clear:
        return (
          <KeypadButton
            key={item.id}
            value={item.value}
            onSelectElement={onClearExpression}
          />
        );
      case KEYPAD_ACTIONS.equals:
        return (
          <KeypadButton
            key={item.id}
            value={item.value}
            onSelectElement={onEqual}
          />
        );
      case KEYPAD_ACTIONS.changeSign:
        return (
          <KeypadButton
            key={item.id}
            value={item.value}
            onSelectElement={onChangeSign}
          />
        );
      default:
        return (
          <KeypadButton
            onSelectElement={onSelectElement(item.value)}
            key={item.id}
            value={item.value}
          />
        );
    }
  });

  return <KeypadContainer>{buttons}</KeypadContainer>;
}

Keypad.propTypes = {
  onEqual: PropTypes.func,
};

export default Keypad;
