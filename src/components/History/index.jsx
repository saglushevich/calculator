import { useSelector, useDispatch } from "react-redux";
import { HistoryContainer, HistoryTitle, HistoryItems } from "./styled";
import HistoryItem from "@components/HistoryItem";
import { setInputValue } from "@store/actions/actions";

function History () {
    const history = useSelector(state => state.history);
    const dispatch = useDispatch();

    const onSelectHistoryItem = (value) => {
        dispatch(setInputValue(value));
    }   

    const items = history.map((item, i) => {
        return <HistoryItem key={i} onSelectHistoryItem={() => onSelectHistoryItem(item.result)} expression={`${item.expression}=${item.result}`}/>
    });

    return (
        <HistoryContainer>
            <HistoryTitle>History</HistoryTitle>
            <HistoryItems type="history">
                {items.length ? items : <HistoryItem expression="No items"/>}
            </HistoryItems>
        </HistoryContainer>
    )
}

export default History;