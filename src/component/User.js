import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.user.name} = {this.props.user.wins} wins</h3>
            </div>
        )
    }
}

export default User
