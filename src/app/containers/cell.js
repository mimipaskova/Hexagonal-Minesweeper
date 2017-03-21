import React from 'react';

var Cell = React.createClass({
	render: function () {

		return (
            <span>{this.props.isMine} {this.props.neightMines} &nbsp; &nbsp;</span>
        );
	}
});

export default Cell;
