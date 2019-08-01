import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    empties: [],
    wallet: 1000
  }

  addEmpties = () => {
    let array = [...this.state.empties]
    array.push("plate")
    this.setState({
      empties: array
    })
  }

  buy = (sushiPrice) => {
    if (sushiPrice <= this.state.wallet){
      let newWallet = this.state.wallet - sushiPrice
      this.setState({
        wallet: newWallet
      })
    }
  }

  render() {

    return (
      <div className="app">
        <SushiContainer buy={this.buy} addEmpties={this.addEmpties} sushi={API}  />
        <Table wallet={this.state.wallet} addEmpties={this.addEmpties} emptyPlates={this.state.empties} />
      </div>
    );
  }
}

export default App;
