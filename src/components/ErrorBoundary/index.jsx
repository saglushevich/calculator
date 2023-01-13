import { Component } from "react";

import { ErrorMessage } from "./styled";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage>Something went wrong!</ErrorMessage>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
