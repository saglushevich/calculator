import { Component } from "react";

import Display from "@components/Display";
import Keypad from "@components/Keypad";
import History from "@components/History";
import ControlPanel from "@components/ControlPanel";

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

  render() {
    const { historyState } = this.state;

    return (
      <CalculatorContainer>
        <CalculatorInnerContainer>
          <Display />
          <Keypad />
        </CalculatorInnerContainer>
        <CalculatorInnerContainer>
          <ControlPanel onSetHistoryState={this.setHistoryState} />
          {historyState ? <History /> : null}
        </CalculatorInnerContainer>
      </CalculatorContainer>
    );
  }
}

export default CalculatorСС;
