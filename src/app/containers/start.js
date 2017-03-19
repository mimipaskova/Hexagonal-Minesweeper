import React from 'react';
import Game from './game';

var Start = React.createClass({
  start: function() {
    console.log("start game with ");
  },
	render: function () {
    var table = 5;
    // var tableY = 0;
    var numberOfMines = 0;
		return (
        <div>
          <h1>Mimi</h1>
          <button onClick = {this.start}>
            Start {table}
          </button>
          <Game table = {table}/>
        </div>
    );
	}
});


export default Start;
