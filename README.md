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

_**Add a state:**_ <br>
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
