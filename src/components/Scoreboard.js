import React, { Component } from "react";
import Player from "./Player";

export default class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
  };
  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            [...this.state.players]
              .sort((a, b) => b.score - a.score)
              .map(player => (
                <Player {...player} key={player.id} />
              ))
          }
        </ul>
      </div>
    );
  }
}