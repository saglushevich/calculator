import { useSelector, useDispatch } from "react-redux";

import KeypadButton from "@components/KeypadButton/index";
import { KEYPAD_BUTTONS, KEYPAD_ACTIONS } from "@constants";
import {
  setInvalidInputFormat,
  setInputValue,
  inputPoint,
  inputNumber,
  inputOperator,
  clearCalculations,
  setResult,
} from "@store/actions/actions";
import { createCalcQueue, calculate } from "@utils/calculator";

import KeypadContainer from "./styled";

function Keypad() {
  const dispatch = useDispatch();

  const expression = useSelector((state) => state.expression);
  const input = useSelector((state) => state.inputValue);

  const onSelectElement = (value) => () => {
    dispatch(setInvalidInputFormat(false));

    if (value.match(/\d/)) {
      dispatch(inputNumber(value));
    } else if (value.match(/[+\-*/%()]/)) {
      dispatch(inputOperator(value));
    } else {
      dispatch(inputPoint(value));
    }
  };

  const onChangeSign = () => {
    if (!isNaN(input)) {
      dispatch(setInputValue(input * -1 + ""));
    }
  };

  const onClearExpression = () => {
    dispatch(clearCalculations());
  };

  const onEqual = () => {
    const finalFormula = expression.concat(input);
    let result = calculate(createCalcQueue(finalFormula));

    if (!Number.isNaN(result) && finalFormula.length !== 1) {
      result = result % 1 !== 0 ? result.toFixed(3) : result;

      dispatch(setResult(result.toString()));
    } else {
      dispatch(setInvalidInputFormat(true));
    }
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

export default Keypad;
