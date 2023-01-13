import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Display from "@components/Display";
import Keypad from "@components/Keypad";
import History from "@components/History";
import ControlPanel from "@components/ControlPanel";
import {
  updateExpression,
  updateHistory,
  setInvalidInputFormat,
  setInputValue,
} from "@store/actions/actions";
import {
  Calculator,
  AddToStackCommand,
  GetFromStackCommand,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  RemainderCommand,
} from "@utils/calculation";
import { isOperator, getOperatorePriority } from "@utils/operators";

import { CalculatorContainer, CalculatorInnerContainer } from "./styled";

function CalculatorFC() {
  const [historyState, setHistoryState] = useState(false);

  const expression = useSelector((state) => state.expression);
  const history = useSelector((state) => state.history);
  const input = useSelector((state) => state.inputValue);

  const dispatch = useDispatch();

  const createCalcQueue = (expression) => {
    let result = [],
      stack = [];

    expression.forEach((item) => {
      if (!isNaN(item)) {
        result.push(item);
      } else if (item === "(") {
        stack.push(item);
      } else if (item === ")") {
        while (stack.length > 0) {
          const pulledItem = stack.pop();

          if (pulledItem === "(") {
            break;
          } else {
            result.push(pulledItem);
          }
        }
      } else if (isOperator(item)) {
        while (stack.length > 0) {
          const peekedItem = stack[stack.length - 1];

          if (
            isOperator(peekedItem) &&
            getOperatorePriority(peekedItem) >= getOperatorePriority(item)
          ) {
            result.push(peekedItem);
            stack.pop();
          } else {
            break;
          }
        }

        stack.push(item);
      }
    });

    while (stack.length) {
      result.push(stack.pop());
    }

    return result;
  };

  const calculate = (expression) => {
    const calculator = new Calculator();

    expression.forEach((item) => {
      if (!isNaN(item)) {
        calculator.executeCommand(new AddToStackCommand(item));
      } else {
        const number = +calculator.executeCommand(new GetFromStackCommand());

        calculator.executeCommand(
          new AddCommand(+calculator.executeCommand(new GetFromStackCommand()))
        );

        switch (item) {
          case "+":
            calculator.executeCommand(new AddCommand(number));
            break;
          case "-":
            calculator.executeCommand(new SubtractCommand(number));
            break;
          case "*":
            calculator.executeCommand(new MultiplyCommand(number));
            break;
          case "/":
            calculator.executeCommand(new DivideCommand(number));
            break;
          case "%":
            calculator.executeCommand(new RemainderCommand(number));
            break;
          default:
            console.log("error");
        }

        calculator.executeCommand(new AddToStackCommand(calculator.value));
        calculator.executeCommand(new MultiplyCommand(0));
      }
    });

    if (calculator.stack.length === 1) {
      calculator.setValue(calculator.stack.pop());
    } else {
      console.log("error");
    }

    return calculator.value;
  };

  const onEqual = () => {
    const finalFormula = expression.concat(input);
    let result = calculate(createCalcQueue(finalFormula));
    if (!Number.isNaN(result) && finalFormula.length !== 1) {
      result =
        result === 0 ? "" : result % 1 !== 0 ? result.toFixed(3) : result;

      let newHistoryList = [
        ...history,
        { expression: [...expression, input].join(""), result },
      ];

      dispatch(updateHistory(newHistoryList));
      dispatch(updateExpression(result + ""));

      localStorage.setItem("history", JSON.stringify(newHistoryList));

      dispatch(setInputValue(result + ""));
      dispatch(updateExpression([]));
      sessionStorage.removeItem("expression");
      sessionStorage.removeItem("inputValue");
    } else {
      dispatch(setInvalidInputFormat(true));
    }
  };

  return (
    <CalculatorContainer>
      <CalculatorInnerContainer>
        <Display />
        <Keypad onEqual={onEqual} />
      </CalculatorInnerContainer>
      <CalculatorInnerContainer>
        <ControlPanel
          onSetHistoryState={() => setHistoryState(!historyState)}
        />
        {historyState ? <History /> : null}
      </CalculatorInnerContainer>
    </CalculatorContainer>
  );
}

export default CalculatorFC;
