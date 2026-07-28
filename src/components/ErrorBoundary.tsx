import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
          <p className="text-sm font-mono text-foreground/40 uppercase tracking-[0.2em] mb-4">Error</p>
          <h1 className="text-2xl sm:text-3xl font-display mb-4 text-center">Something went wrong</h1>
          <p className="text-foreground/55 text-sm mb-6 text-center max-w-md">
            {this.state.error?.message || "An unexpected error occurred."}
          </p>
          <button
            className="px-6 py-2  bg-foreground text-background text-sm font-medium"
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
