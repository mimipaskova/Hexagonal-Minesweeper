import React from 'react';

var Cell = React.createClass({
    getInitialState: function() {
        var hexa = <img  onClick = {this.clickCell} 
                src={"../assets/images/mine.jpg"}>
                </img>;
        return {cell: hexa};
    },
    clickCell: function () {
        var info = <span onClick = {this.clickCell}>{this.props.neighMines} &nbsp; &nbsp;</span>;
        this.setState({cell: info});
         this.props.clickCell(this);
    },
	render: function () {

		return (
            <span className="cell">
                {/*if(this.props.isOpended) {
                    return (
                        <span onClick = {this.clickCell}>{this.props.isMine} {this.props.neighMines} &nbsp; &nbsp;</span>
                    )
                } else {
                    return (
                        <img  onClick = {this.clickCell}
                src={"../assets/images/mine.jpg"}>
                </img>
                    )
                }*/}

                {this.state.cell}
            </span>
        );
	}
});

export default Cell;
