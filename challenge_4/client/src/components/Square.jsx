import React from 'react';
import {playPiece} from '../controllers/gameplay.jsx';

//What about getting rid of the squares
//and setting the background of the board instead?
let Square = ({sqid, onClickHandler, squareData}) => {
	return (
		<div className="square">
			<div className={"circle" + " " + squareData} 
				id={sqid} 
				onClick={onClickHandler}>
			</div>
		</div>
	);
};

export default Square;