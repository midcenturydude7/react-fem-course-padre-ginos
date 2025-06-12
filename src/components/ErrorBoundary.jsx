import React from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <p>
            Please try again later. <Link to="/">Go back to home</Link>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
