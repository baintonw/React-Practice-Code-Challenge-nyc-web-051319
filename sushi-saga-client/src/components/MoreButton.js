import React from 'react'

class MoreButton extends React.Component {

  render(){
    console.log(this.props.sushi)
    return <button onClick={this.props.shiftSushi}>
    More sushi!
    </button>

  }

}

export default MoreButton
