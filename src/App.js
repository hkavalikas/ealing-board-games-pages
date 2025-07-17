import React from 'react';
import HomePage from './pages/HomePage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

function App() {
    return (
        <ErrorBoundary>
            <div className="app-container">
                <HomePage/>
            </div>
        </ErrorBoundary>
    );
}

export default App;
