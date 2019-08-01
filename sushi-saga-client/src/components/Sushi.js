import React, { Fragment } from 'react'

class Sushi extends React.Component {
  
  state = {
    eaten: false
  }

  handleClick = () => {
    this.setState({
      eaten: true
    })
    let price = this.props.oneSushi.price
    this.props.buy(price)
    this.props.addEmpties()
  }

  render(){
    console.log(this.props.oneSushi, this.state.eaten)
    return (
      <div className="sushi">
      <div className="plate"
      onClick={this.state.eaten ? null : this.handleClick}>
      {
        this.state.eaten
         ?
        null
        :
        <img src={this.props.oneSushi.img_url} width="100%" />
      }
      </div>
      <h4 className="sushi-details">
      {this.props.oneSushi.name} - ${this.props.oneSushi.price}
      </h4>
      </div>
    )

  }
}

export default Sushi
