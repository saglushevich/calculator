import { DisplayContainer, InputValue, ErrorMessage, Expression } from './styled'
import { useSelector } from "react-redux";

const Display = () => {
    const expression = useSelector(state => state.expression);
    const inputValue = useSelector(state => state.inputValue);
    const invalidInputFormat = useSelector(state => state.invalidInputFormat);

    return (
        <DisplayContainer>
            <Expression type="expression">{expression.join("")}</Expression>
            <InputValue type="value">{inputValue}</InputValue>
            {invalidInputFormat ? <ErrorMessage>Invalid input format</ErrorMessage> : null}
        </DisplayContainer>
    )
}

export default Display