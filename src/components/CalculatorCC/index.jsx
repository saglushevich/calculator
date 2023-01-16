import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Display from "@components/Display";
import Keypad from "@components/Keypad";
import History from "@components/History";
import ControlPanel from "@components/ControlPanel";
import * as actions from "@store/actions/actions";
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

class CalculatorСС extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyState: false,
    };
  }

  setHistoryState = () => {
    this.setState((state) => ({
      historyState: !state.historyState,
    }));
  };

  createCalcQueue = (expression) => {
    const result = [];
    const stack = [];

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

  calculate = (expression) => {
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

  onEqual = () => {
    const {
      expression,
      history,
      input,
      updateHistory,
      updateExpression,
      setInputValue,
      setInvalidInputFormat,
    } = this.props;
    let result = this.calculate(this.createCalcQueue(expression.concat(input)));

    if (!Number.isNaN(result)) {
      result = result % 1 !== 0 ? result.toFixed(3) : result;
      sessionStorage.setItem("inputValue", result);

      const newHistoryList = [
        ...history,
        {
          expression: [...expression, input].join(""),
          result,
        },
      ];

      updateHistory(newHistoryList);
      updateExpression(result + "");

      localStorage.setItem("history", JSON.stringify(newHistoryList));

      setInputValue(result + "");
      updateExpression([]);
      sessionStorage.removeItem("expression");
    } else {
      setInvalidInputFormat(true);
    }
  };

  render() {
    const { historyState } = this.state;

    return (
      <CalculatorContainer>
        <CalculatorInnerContainer>
          <Display />
          <Keypad onEqual={this.onEqual} />
        </CalculatorInnerContainer>
        <CalculatorInnerContainer>
          <ControlPanel onSetHistoryState={this.setHistoryState} />
          {historyState ? <History /> : null}
        </CalculatorInnerContainer>
      </CalculatorContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: state.expression,
    history: state.history,
    input: state.inputValue,
  };
};

CalculatorСС.propTypes = {
  expression: PropTypes.array,
  history: PropTypes.array,
  input: PropTypes.string,
  updateHistory: PropTypes.func,
  updateExpression: PropTypes.func,
  setInputValue: PropTypes.func,
  setInvalidInputFormat: PropTypes.func,
};

export default connect(mapStateToProps, actions)(CalculatorСС);
