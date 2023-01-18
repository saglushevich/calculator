import { useState } from "react";

import Display from "@components/Display";
import Keypad from "@components/Keypad";
import History from "@components/History";
import ControlPanel from "@components/ControlPanel";

import { CalculatorContainer, CalculatorInnerContainer } from "./styled";

function CalculatorFC() {
  const [historyState, setHistoryState] = useState(false);

  const toggleHistory = () => {
    setHistoryState(!historyState);
  };

  return (
    <CalculatorContainer>
      <CalculatorInnerContainer>
        <Display />
        <Keypad />
      </CalculatorInnerContainer>
      <CalculatorInnerContainer>
        <ControlPanel onSetHistoryState={toggleHistory} />
        {historyState ? <History /> : null}
      </CalculatorInnerContainer>
    </CalculatorContainer>
  );
}

export default CalculatorFC;
