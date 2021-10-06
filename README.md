# CREATE A REACT APP - FIRST STEPS

```
create-react-app <name-of-the-app>
```

- If not working check **node —version** and update with  **nvm install --lts**
- If already installed **nvm use 14** (or other version)

````
npm start / yarn start
````

## Create a component:

First remove the initial React display in app.js and create new component:

_**app.js**_<br>

````
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render () {
    return(
      <div className="App"><h1>Hello World</h1></div>
    )
  }
}

export default App;
````

_**index.js:**_ <br>
````
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
````

## Adding props (properties):

_Insert **properties** in the component tag where it is being called or displayed. In our case in **index.js**_

````
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Game score='100' />
    <Button />
  </React.StrictMode>,
  document.getElementById('root')
);
````
_Display the **properties** in the component file, in our case **Game.js**_ <br>

````
class Game extends Component {
  render () {
    return(
      <div>Score: { this.props.score }</div>
    )
  }
}
````

### Adding default props to a componenent:
````
class Game extends Component {
  static defaultProps {
    score: 100
  }
  render () {
    return(
      <div>Score: { this.props.score }</div>
    )
  }
}
````


## Adding a state:
````
import React, { Component } from "react";

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
      <div>Score: { this.state.score }</div>
    )
  }
}

export default Game;
````

_**Alternate state syntax:**_ <br>
````
import React, { Component } from "react";

class Game extends Component {
  state = {
      score: 0,
      gameOver: false
    }
  render () {
    return(
      <div>Score: { this.state.score }</div>
    )
  }
}

export default Game;
````

_**Create a Button to change the state:**_ <br>
````
import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    // bind the function to this instance
  }

  handleClick(e) {
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

export default Button;
````
<br>

_**Change a state value:**_ <br>

````
this.setState({ key: newValue });
````
**Our button component (Button.js)**
1- Create a function **functionName(event) {}** (event is optional) that calls the **setState** attribute to change your state value
2- Bind this function to your **state** with the attribute **.bind(this)**
3- Call the function in your code **{this.functionName}**

````
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    // bind the function to this instance
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
````
### 4 ways to bind:
_1- Binding in the constructor_
````
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this); // BINDING HERE
  }

  handleClick(evt) {
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
````
_2- Binding in the markup itself_
````
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick(evt) {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'clicked' : 'not clicked'}</h1>
        <button onClick={this.handleClick.bind(this)}>Click Me</button> // BINDING HERE
      </div>
    )
  }
}
````
_Binding in the Markup intself 2_
````
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick(evt) {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'clicked' : 'not clicked'}</h1>
        <button onClick={() => handleClick.bind()}>Click Me</button> // BINDING HERE
      </div>
    )
  }
}
````
_Binding at function declaration by creating an arrow function (experimental)_
````
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    // bind the handleCick() function to this component
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
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
````
