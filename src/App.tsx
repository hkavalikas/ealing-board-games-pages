import HomePage from './pages/HomePage';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <div className="app-container">
                <HomePage />
            </div>
        </ErrorBoundary>
    );
};

export default App;
