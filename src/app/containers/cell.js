import React from 'react';

var Cell = React.createClass({
	render: function () {

		return (
            <span>{this.props.neghMines}!</span>
        );
	}
});

export default Cell;
