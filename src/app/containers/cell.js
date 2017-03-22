import React from 'react';

var Cell = React.createClass({
    getInitialState: function() {
        var hexa = <img  onClick = {this.clickCell} 
                src={"../assets/images/mine.jpg"}>
                </img>;
        return {cell: hexa};
    },
    clickCell: function () {
        if(this.props.isMine) {
            this.stopGame();
        } else {
            this.openCell();
        }
    },
    stopGame: function () {
        alert("You die");
    },
    openCell: function () {
        var info = <span onClick = {this.clickCell}>{this.props.isMine} {this.props.neighMines} &nbsp; &nbsp;</span>;
        this.setState({cell: info});
    },
	render: function () {

		return (
            <span>
                {this.state.cell}
            </span>
        );
	}
});

export default Cell;
