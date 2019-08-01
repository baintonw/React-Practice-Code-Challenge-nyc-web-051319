import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

class SushiContainer extends React.Component {
  //I need a fetch request when this component loads
  state = {
    sushi: [],
    eaten: false
  }

  componentDidMount(){
    fetch(this.props.sushi)
      .then(res=>res.json())
      .then(data => {
          this.setState({
            sushi: [...data]
          })
        }
      )
  }

  renderSushi = () => {
    let plates = this.state.sushi.slice(0, 4)

      return plates.map(oneSushi => {
        return <Sushi key={oneSushi.id} handleClick={this.props.handleClick}  eaten={this.state.eaten} buy={this.props.buy} addEmpties={this.props.addEmpties} oneSushi={oneSushi}/>
      })

  }
  //grab first four sushi and render them

  shiftSushi = () => {
    let newSushi = [...this.state.sushi]
    
    newSushi.shift()
    newSushi.shift()
    newSushi.shift()
    newSushi.shift()

    this.setState({
      sushi: newSushi
    })

  }
  //sushi without first four
  render(){
    console.log(this.props.sushi)
      return (
        <Fragment>
          <div className="belt">
            {

              this.renderSushi()
              /*
                 Render Sushi components here!
              */
            }
            <MoreButton shiftSushi={this.shiftSushi} sushi={this.state.sushi} />
          </div>
        </Fragment>
      )
    }
  }
//How would I console log inside of a functional component?

export default SushiContainer
