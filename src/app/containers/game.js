import React from 'react';
import _ from 'lodash';
import Popup from 'react-popup';

import Cell from './cell';

var Game = React.createClass({
    getInitialState: function() {
        return {table: [], possibleMines: this.props.allMines, minesTable: [], currentScore: 0, userName: ""};
    },
    generateMines: function() {
        const allCells = this.props.tableX * this.props.tableY;
        this.state.minesTable =  _(allCells)
            .range()
            .map(i => ({ mines: Number(i < this.props.allMines), neighMines: 0 }))
            .shuffle()
            .value();
    },

    createTable: function() {
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
                        neighMines = {this.state.minesTable[this.props.tableX * i + j].neighMines}
                        clickCell = {this.clickCell}
                        />);
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
    clickCell: function (cell) {
        if(cell.props.isMine) {
            this.gameOver(cell);
        } else {
            this.openCell(cell);
        }
    },
    gameOver: function () {
        this.showPopupAndSave();
        // alert("You die write your name and save it");
        console.log("you die", this.state.currentScore, this.props.tableX * this.props.tableY);

        // this.createTable();
        // this.saveResult();
    },
    handleChange: function (name, event) {
        this.setState({userName: event.target.value});
    },
    openCell: function (cell) {
        this.state.currentScore ++;
    },
    showPopupAndSave: function () {
        var score = this.state.currentScore;
        var allPoints = this.props.tableX * this.props.tableY - this.state.possibleMines;
        Popup.prompt('Type your name below', 'What\'s your name?', {
            placeholder: 'Placeholder yo',
            type: 'text'
        }, {
            text: 'Save',
            className: 'success',
            action: function (Box) {
                localStorage.setItem(
                    Box.value,
                    JSON.stringify({
                        score: score,
                        all: allPoints})
                );
                Box.close();
            }
        });
    },
    saveResult: function () {
        // var users = localStorage.getItem("users") == null ? [] : [localStorage.getItem("users")];
        // users.push({score: this.state.currentScore,all: this.props.tableX * this.props.tableY});
        localStorage.setItem(
            this.state.userName,
            JSON.stringify({score: this.state.currentScore,all: this.props.tableX * this.props.tableY - this.state.possibleMines}));
    },
	render: function () {

		return (
            <div>
                <h1>Table will be {this.props.tableX} x {this.props.tableY}</h1>
                <button onClick = {this.createTable}>show table with mines
                </button>
                <div>
                    {this.state.table}
                </div>
                <label>
                    Your name
                    <input type="text" value={this.state.userName} onChange={this.handleChange.bind(this, 'userName')} />
                </label>
                <button onClick = {this.saveResult}>SaveResult
                </button>
            </div>
        );
	}
});

export default Game;
