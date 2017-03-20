import React from 'react';
import Cell from './cell';

var Game = React.createClass({
    getInitialState: function() {
        return {table: []};
    },

    drawTable: function() {
        const table = [];
        for(var i = 0; i < this.props.tableX; i ++) {
            for(var j = 0; j < this.props.tableY; j ++) {
                table.push(<Cell neghMines = {i} key={"cell_" + i + "_" + j}/>);
            }
            table.push(<br key={"newLine_" + i}/>);
        }
        this.setState({table: table});
    },
	render: function () {

		return (
            <div>
                <h1>Table will be {this.props.tableX} x {this.props.tableY}</h1>
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
