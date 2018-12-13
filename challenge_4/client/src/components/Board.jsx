import React from 'react';
import Square from './Square.jsx';

let generateRow = (number) => {

	return (
		<div className="row">
			{
				[0, 1, 2, 3, 4, 5, 6].map(sq => {
					return <Square sqid={`${number},${sq}`}/>;
				})
			}
		</div>
	);
}

let generateBoard = () => {
	let board = [];
};

let Board = () => (
	<div id="board">
		{
			[0, 1, 2, 3, 4, 5].map(r => {
				return generateRow(r);
			})
		}
	</div>
);

export default Board;