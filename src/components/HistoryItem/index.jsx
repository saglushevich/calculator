import PropTypes from 'prop-types'
import { Item } from "./styled";


function HistoryItem ({expression, onSelectHistoryItem}) {
    return (
        <Item onClick={onSelectHistoryItem}>{expression}</Item>
    )
}

export default HistoryItem;

HistoryItem.propTypes = {
    onSelectHistoryItem: PropTypes.func,
    expression: PropTypes.string
}