import React from 'react';

let Square = ({sqid}) => {
	return (
		<div className="square" id={sqid}>
			<div className="circle"></div>
		</div>
	);
};

export default Square;