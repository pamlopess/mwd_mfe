import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { erro: false };
  }

  static getDerivedStateFromError() {
    return { erro: true };
  }

  render() {
    if (this.state.erro) {
      return <h2>Algo deu errado</h2>;
    }

    return this.props.children;
  }
}