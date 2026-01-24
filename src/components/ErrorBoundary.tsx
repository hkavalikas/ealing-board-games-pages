import React, { Component, ErrorInfo, PropsWithChildren } from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
    constructor(props: PropsWithChildren) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#f7cc4d',
                    color: '#000',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    <h1>Oops! Something went wrong</h1>
                    <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            backgroundColor: '#fff',
                            color: '#000',
                            border: '2px solid #000',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            marginTop: '20px'
                        }}
                    >
                        Refresh Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
