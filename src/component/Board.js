import React, { Component } from 'react'
import Square from '../component/Square'
import '../App'

export class Board extends Component {
    populateBoard() {
        return this.props.location.map((location) => (
            <Square 
              key={location.id} 
              location={location} 
              handleClick={this.props.handleClick}
              style = {this.props.style}
              />
        ));
    }

    render() {
        return <div className="board">
          {this.populateBoard()}
        </div>
    }
}

export default Board
