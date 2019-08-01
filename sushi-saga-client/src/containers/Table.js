import React, { Fragment } from 'react'

class Table extends React.Component {



  render(){
    let plates = this.props.emptyPlates

    const renderPlates = (array) => {
      return array.map((x, index) => {
        return <div className="empty-plate" style={{ top: -7 * index }}/>
      })
    }

    console.log(this.props.wallet)
    return (
      <Fragment>
      <h1 className="remaining">
      You have: ${this.props.wallet} remaining!
      </h1>
      <div className="table">
      <div className="stack">
      {
        /*
        renderPlates takes an array
        and renders an empty plate
        for every element in the array
        */
        renderPlates(this.props.emptyPlates)

      }
      </div>
      </div>
      </Fragment>
    )

    }




}

export default Table
