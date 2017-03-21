import React from 'react';
import Cell from './cell';

var Game = React.createClass({
    getInitialState: function() {
        return {table: [], possibleMines: this.props.allMines};
    },
    countMines: function() {
        var isMine = Math.floor(Math.random() * 2);
        if(this.state.possibleMines == 0) {
            return 0;
        }
        if(this.state.possibleMines > 0 && isMine == 1) {
            this.state.possibleMines--;
        }
        return isMine;
    },

    drawTable: function() {
        const table = [];
        for(var i = 0; i < this.props.tableX; i ++) {
            for(var j = 0; j < this.props.tableY; j ++) {
                table.push(<Cell neghMines = {i} key={"cell_" + i + "_" + j} isMine = {this.countMines()} />);
            }
            table.push(<br key={"newLine_" + i}/>);
        }
        this.setState({table: table, possibleMines: this.props.allMines});
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
