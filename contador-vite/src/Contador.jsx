import React, { Component } from 'react';
import './Contador.css';

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Componente montado!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Contador atualizado!");
    if (this.state.count % 5 === 0 && this.state.count !== 0) {
      alert(`Contador atingiu um múltiplo de 5: ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log("Componente será desmontado!");
  }

  increment = () => {
    if (this.state.count < 10) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
  }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  }

  reset = () => {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div className="contador">
        <h2>Valor do Contador: {this.state.count}</h2>
        <div className="buttons">
          <button onClick={this.increment} disabled={this.state.count === 10}>Incrementar</button>
          <button onClick={this.decrement} disabled={this.state.count === 0}>Decrementar</button>
          <button onClick={this.reset}>Resetar</button>
        </div>
      </div>
    );
  }
}

export default Contador;
