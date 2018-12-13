import React from 'react';
import Square from './Square.jsx';

let renderRow = (number) => {

	return (
		<div className="col">
			{ //TODO: refactor with Array.from
				[0, 1, 2, 3, 4, 5, 6].map(sq => {
					return <Square sqid={`${number},${sq}`}/>;
				})
			}
		</div>
	);
}

let Board = () => (
	<div id="board">
		{
			[0, 1, 2, 3, 4, 5].map(r => {
				return renderRow(r);
			})
		}
	</div>
);

export default Board;