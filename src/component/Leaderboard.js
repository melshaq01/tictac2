import React, { Component } from 'react'
import User from './User';

export class Leaderboard extends Component {

    render() {
        return(        
        <div className="leaderboard">
            {this.props.users.map(user => (
              <User
              key={user.name}
              user={user}
              />
            ))}
        </div>
       )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
  };

export default Leaderboard
