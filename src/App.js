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
<h1 className="title">Rock paper scissors</h1>
     <div className="style">
       <div className="main">

        <div id="here"></div>
         <PlayerCard name="Player One" sign={this.state.playerOne}/>
         <hr/>
         <PlayerCard name="Player Two" sign={this.state.playerTwo}/>

       </div>
       <div className="winner">{this.decideWinner()}</div>
       <button type="button" onClick={this.playGame}>Play the Game</button>
     </div>
</div>

)
}
};


export default Game;
