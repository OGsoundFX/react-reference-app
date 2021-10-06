import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    // bind the handleCick() function to this component
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'clicked' : 'not clicked'}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

// alternate syntax using Babel

// class Button extends Component {
//   state = { clicked: false };

//   handleClick = e => {
//     this.setState({ clicked: true });
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.clicked ? 'clicked' : 'not clicked'}</h1>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     )
//   }
// }

export default Button;