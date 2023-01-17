import { Component } from "react";
import PropTypes from "prop-types";

import ErrorMessage from "./styled";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return <ErrorMessage>Something went wrong!</ErrorMessage>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
<<<<<<< HEAD
  children: PropTypes.node,
=======
  children: PropTypes.array,
>>>>>>> 3ea8cde (delete unused rules)
};

export default ErrorBoundary;
