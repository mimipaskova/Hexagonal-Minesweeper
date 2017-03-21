import React from 'react';
import _ from 'lodash';

import Cell from './cell';

var Game = React.createClass({
    getInitialState: function() {
        return {table: [], possibleMines: this.props.allMines, minesTable: []};
    },
    generateMines: function() {
        const allCells = this.props.tableX * this.props.tableY;
        this.state.minesTable =  _(allCells)
            .range()
            .map(i => ({ mines: Number(i < this.props.allMines), neighMines: 0 }))
            .shuffle()
            .value();
    },

    drawTable: function() {
        this.generateMines();
        this.countMines();
        const table = [], cells = [];
        for(var i = 0; i < this.props.tableY; i ++) {
            if(i % 2 == 0) {
                table.push(<span key={"newSpace_" + i}>  &nbsp; &nbsp; </span>);
            }
            for(var j = 0; j < this.props.tableX; j ++) {
                table.push(
                    <Cell 
                        key={"cell_" + i + "_" + j} 
                        isMine = {this.state.minesTable[this.props.tableX * i + j].mines} 
                        neighMines = {this.state.minesTable[this.props.tableX * i + j].neighMines} />);
            }
            table.push(<br key={"newLine_" + i}/>);
        }
        this.setState({table: table, possibleMines: this.props.allMines});
    },
    countMines: function () {
        _.each(this.state.minesTable, (info, i) => {
            if (info.mines) {
                var y = Math.floor(i / this.props.tableX),
                    x = i % this.props.tableX,
                    neighbours = y % 2 ? [[x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x, y - 1], [x, y + 1], [x + 1, y] ] :
                        [[x + 1, y - 1], [x - 1, y], [x + 1, y + 1], [x, y - 1], [x, y + 1], [x + 1, y] ];
                _.each(neighbours, ([nx, ny]) => {
                    if (nx >= 0 && ny >= 0 && nx < this.props.tableX && ny < this.props.tableY) {
                        this.state.minesTable[ny * this.props.tableX + nx].neighMines++;
                    }
                });
            }
        })
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
