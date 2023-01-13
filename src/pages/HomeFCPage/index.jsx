import CalculatorFC from "@components/CalculatorFC";
import Header from "@components/Header";
import ErrorBoundary from '@components/ErrorBoundary';

function HomeFCPage () {
    return (
        <ErrorBoundary>
            <Header/>
            <CalculatorFC/>
        </ErrorBoundary>
    )
}

export default HomeFCPage;