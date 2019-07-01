<<<<<<< HEAD
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
=======
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
>>>>>>> 38e5f22d22a17bda245fb1856314e9fa3ac33c99
