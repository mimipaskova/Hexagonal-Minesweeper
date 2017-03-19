import React from 'react';
import Cell from './cell';

var Game = React.createClass({
    getInitialState: function() {
        return {table: []};
    },

    drawTable: function() {
        console.log("drawTable");
        const table = [];
        // this.setState({children: this.props.table});
        for(var i = 0; i < this.props.table; i ++) {
            for(var j = 0; j < this.props.table; j ++) {
                table.push(<Cell neghMines = {i} key={"cell_" + i + "_" + j}/>);
            }
            table.push(<br key={"newLine_" + i}/>);
        }
        this.setState({table: table});
    },
	render: function () {

		return (
            <div>
                <h1>Table will be {this.props.table}</h1>
                <button onClick = {this.drawTable}>drawTable
                </button>
                <div>
                    {this.state.table}
                </div>
            </div>
        );
	}
});

export default Game;
