import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props); // super enables 'this' and props makes props accessible
    console.log(props);
    this.state = {
      score: 0,
      gameOver: false
    }
    this.incrementScore = this.incrementScore.bind(this);
    this.decrementScore = this.decrementScore.bind(this);
  }

  incrementScore() {
    this.setState({ score: this.state.score += 1 })
  }

  decrementScore() {
    this.setState({ score: this.state.score -= 1 })
  }

  render () {
    return(
      <div>
        <div>Score: { this.state.score } out of { this.props.totalScore }</div>
        <button onClick={ this.incrementScore }> + </button>
        <button onClick={ this.decrementScore }> - </button>
      </div>
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