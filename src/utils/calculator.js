import {
  Calculator,
  AddToStackCommand,
  GetFromStackCommand,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  RemainderCommand,
} from "./calculation";
import { isOperator, getOperatorePriority } from "./operators";

export const createCalcQueue = (formula) => {
  const result = [];
  const stack = [];

  formula.forEach((item) => {
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

export const calculate = (formula) => {
  const calculator = new Calculator();

  formula.forEach((item) => {
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
