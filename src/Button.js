import React, { Component } from "react";

class Button extends Component {
  static defaultProps = {
    test: 'testing default props'
  }
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    // bind the handleCick() function to this component
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.setState({ clicked: true });
  }

  // handleClick = () => {
  //   this.setState({ clicked: true });
  // }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'clicked' : 'not clicked'}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        <p>{this.props.test}</p>
        {/* 2 other ways of binding this to the function (and remove line 8) */}
        {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
        {/* <button onClick={() => handleClick())}>Click Me</button> */}
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