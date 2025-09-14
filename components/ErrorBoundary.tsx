// ErrorBoundary.tsx
import React from 'react';

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error?: Error }> {
  state = { error: undefined as Error | undefined };
  static getDerivedStateFromError(error: Error) { return { error }; }
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Boundary caught:', error, info.componentStack); // shows component stack
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 16 }}>
          <h3>Oops, something broke.</h3>
          <pre>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
