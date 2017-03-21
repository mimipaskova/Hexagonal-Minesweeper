import React from 'react';

var Cell = React.createClass({
	render: function () {

		return (
            <span>{this.props.isMine} </span>
        );
	}
});

export default Cell;
