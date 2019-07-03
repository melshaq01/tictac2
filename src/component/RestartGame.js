import React, { Component } from 'react'

export class RestartGame extends Component {
    render() {
        return (
            <div>
                <button className="restart-game"
                onClick={this.props.handleRestart.bind(this)}>
                    Restart Game
                </button>
            </div>
        )
    }
}

export default RestartGame
