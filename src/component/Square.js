<<<<<<< HEAD
import React, { Component } from 'react'

export class Square extends Component {
    render() {
        const {id, label, style} = this.props.location;
        return (
          <div className={style}>
              <button className="button"
                id = {id}
                onClick={this.props.handleClick.bind(this, id)}>
                {label}
              </button>
          </div>
        )
    }
}

export default Square
=======
import React, { Component } from 'react'

export class Square extends Component {
    render() {
        const {id, label, style} = this.props.location;
        return (
          <div className={style}>
              <button className="button"
                id = {id}
                onClick={this.props.handleClick.bind(this, id)}>
                {label}
              </button>
          </div>
        )
    }
}

export default Square
>>>>>>> 38e5f22d22a17bda245fb1856314e9fa3ac33c99
