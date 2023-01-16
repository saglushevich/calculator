import { useState } from "react";

import Display from "@components/Display";
import Keypad from "@components/Keypad";
import History from "@components/History";
import ControlPanel from "@components/ControlPanel";

import { CalculatorContainer, CalculatorInnerContainer } from "./styled";

function CalculatorFC() {
  const [historyState, setHistoryState] = useState(false);

  return (
    <CalculatorContainer>
      <CalculatorInnerContainer>
        <Display />
        <Keypad />
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
