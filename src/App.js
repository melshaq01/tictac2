import React, {Component} from 'react';
import Board from './component/Board';
import RestartGame from './component/RestartGame';
import './App.css';

export class App extends Component {
    state = {
      location: [
        {
          id: 1,
          label: '-',
          style: 'square'
        },
        {
          id: 2,
          label: '-',
          style: 'square'
        },
        {
          id: 3,
          label: '-',
          style: 'square'
        },
        {
          id: 4,
          label: '-',
          style: 'square'
        },
        {
          id: 5,
          label: '-',
          style: 'square'
        },
        {
          id: 6,
          label: '-',
          style: 'square'
        },
        {
          id: 7,
          label: '-',
          style: 'square'
        },
        {
          id: 8,
          label: '-',
          style: 'square'
        },
        {
          id: 9,
          label: '-',
          style: 'square'
        }
      ],
      xIsNext: true
    };

  calculateWinner() {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const location = this.state.location;
    for(let j=0; j < winningPattern.length; j++) {
      const[a,b,c] = winningPattern[j];
      if((location[a].label !== '-') &&
        (location[b].label !== '-') &&
        (location[c].label !== '-') &&
        (location[a].label === location[b].label) 
        && (location[a].label === location[c].label)
        &&(location[b].label === location[c].label)) {
        location[a].style = 'square--green';
        location[b].style = 'square--green';
        location[c].style = 'square--green';
      }
    }
  }

  handleClick = (id) => {
    this.setState({location: this.state.location.map(location => {
      if((location.id === id) && (this.state.xIsNext) && (location.label==='-')) {
        location.label = 'X';
        this.setState({xIsNext: !this.state.xIsNext});
      } else if ((location.id === id) && (!this.state.xIsNext) && (location.label==='-')) {
        location.label = 'O';
        this.setState({xIsNext: !this.state.xIsNext});
      }
      return location;
    })
    });
  }

  handleRestartGame = () => {
    this.setState({location: this.state.location.map(location => {
      location.label= '-';
      location.style='square';
      this.setState({xIsNext: true});
      return location;
    })
  });
  }

  render() {
    this.calculateWinner();
    return (
      <div className="wrapper">
        <h1>Tic Tac Toe</h1>
        <Board
          location = {this.state.location}
          handleClick = {this.handleClick}
          calculateWinner={this.calculateWinner}
          style= {this.state.style}
        />
        <RestartGame
          handleRestart = {this.handleRestartGame}
        />
      </div>
    )
  }
}

export default App
