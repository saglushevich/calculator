import { ControlPanelContainer, ControlPanelButton } from './styled'
import PropTypes from 'prop-types'

function ControlPanel ({onSetHistoryState}) {

    return (
        <ControlPanelContainer>
            <ControlPanelButton onClick={onSetHistoryState}>Show/Hide history</ControlPanelButton>
        </ControlPanelContainer>
    )
}

export default ControlPanel

ControlPanel.propTypes = {
    onSetHistoryState: PropTypes.func
}