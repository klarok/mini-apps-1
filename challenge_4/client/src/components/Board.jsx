import React from 'react';
import Square from './Square.jsx';

let renderCol = (number, onClickHandler, rowData) => {
	return (
		<div className="col">
			{ //TODO: refactor with Array.from
				[0, 1, 2, 3, 4, 5].map(sq => {
					return <Square sqid={`${number},${sq}`} 
						onClickHandler={onClickHandler}
						squareData={rowData[sq]}/>;
				})
			}
		</div>
	);
}

let Board = ({boardData, onClickHandler}) => (
	<div id="board">
		{
			[0, 1, 2, 3, 4, 5, 6].map(c => {
				return renderCol(c, onClickHandler, boardData[c]);
			})
		}
	</div>
);

export default Board;