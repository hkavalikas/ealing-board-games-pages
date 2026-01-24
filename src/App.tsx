import { FC } from 'react';
import HomePage from './pages/HomePage';
import ErrorBoundary from './components/ErrorBoundary';

const App: FC = () => {
    return (
        <ErrorBoundary>
            <div className="app-container">
                <HomePage />
            </div>
        </ErrorBoundary>
    );
};

export default App;
