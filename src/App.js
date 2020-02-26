import React, {Component} from 'react';
import PlayerCard from "./PlayerCard.js";

class Game extends Component {
constructor(){
  super();
  this.sign = ["rock","scissor","paper"]
  this.state = {
    playerOne: "rock",
    playerTwo: "scissor",
  }
}

//this is where my methods will go :)
playGame =() => {

  this.setState(
    {
      playerOne: this.sign[Math.floor(Math.random() * 3)],
      playerTwo: this.sign[Math.floor(Math.random() * 3)],
    }
  )

}

decideWinner = () => {
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo

    if (playerOne === playerTwo){
        return "It is Tie!"
    }
    else if ((playerOne === "rock" && playerTwo === "scissor") ||
    (playerOne === "paper" && playerTwo === "rock") ||
    (playerOne=== "scissor" && playerTwo === "paper")) {
    return "Player 1 Wins!"
  } else{
  return "Player 2 Wins!"
  }
}

  render() {
    return (
<div className="style">
<div>
<PlayerCard sign={this.state.playerOne} />
<PlayerCard sign={this.state.playerTwo} />
</div>

<div className="winner">
{this.decideWinner()}
</div>
<button type="button" onClick={this.playGame}>Play the game :)</button>
</div>

)
}
};


export default Game;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
