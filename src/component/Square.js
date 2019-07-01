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
