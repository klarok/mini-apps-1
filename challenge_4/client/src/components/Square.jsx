import React from 'react';
import {playPiece} from '../controllers/gameplay.jsx';

let Square = ({sqid}) => {
	return (
		<div className="square">
			<div className="circle" id={sqid} onClick={playPiece}></div>
		</div>
	);
};

export default Square;