import CalculatorСС from "@components/CalculatorCC";
import Header from "@components/Header";
import ErrorBoundary from '@components/ErrorBoundary';

function HomeCCPage () {
    return (
        <ErrorBoundary>
            <Header/>
            <CalculatorСС/>
        </ErrorBoundary>
    )
}

export default HomeCCPage;