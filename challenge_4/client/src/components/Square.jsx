import React from 'react';
import {playPiece} from '../controllers/gameplay.jsx';

let Square = ({sqid, onClickHandler, squareData}) => {
	return (
		<div className="square">
			<div className={"circle" + " " + squareData} 
				id={sqid} 
				onClick={onClickHandler}>
				{squareData}
			</div>
		</div>
	);
};

export default Square;