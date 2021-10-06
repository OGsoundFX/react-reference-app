import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      gameOver: false
    }
  }
  render () {
    return(
      <div>Score: { this.state.score } out of { this.props.totalScore }</div>
    )
  }
}

// alternate syntax using Babel

// class Game extends Component {
//   state = {
//       score: 0,
//       gameOver: false
//     }
//   render () {
//     return(
//       <div>Score: { this.state.score }</div>
//     )
//   }
// }

export default Game;