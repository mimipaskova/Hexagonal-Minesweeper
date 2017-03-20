import React from 'react';
import Game from './game';

var Start = React.createClass({
  start: function() {
    console.log("start game with ");
  },
  getInitialState: function () {
    return {tableX: 0, tableY: 0, mines: 0};
  },
  handleChange: function (name, event) {
    this.setState({[name]: event.target.value});
    
    console.log(event.target);
    console.log(name);
  },
	render: function () {
		return (
        <div>
          <form>
            <label>
              Table X:
              <input type="text" value={this.state.tableX} onChange={this.handleChange.bind(this, 'tableX')} />
            </label>
            <label>
              Table Y:
              <input type="text" value={this.state.tableY} onChange={this.handleChange.bind(this, 'tableY')} />
            </label>
             <label>
              Number of mines:
              <input type="text" value={this.state.mines} onChange={this.handleChange.bind(this, 'mines')} />
            </label>
          </form>
          <Game tableX = {this.state.tableX} tableY = {this.state.tableY}/>
        </div>
    );
	}
});


export default Start;
