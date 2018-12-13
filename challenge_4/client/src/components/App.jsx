import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import {playPiece} from '../controllers/gameplay.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			player: 'red',
			boardData: this.generateBoard()
		};

	}

	generateBoard(numCols = 7, numSq = 6) {
		// return Array.from({length: numCols}, r => {
		// 	return Array.from({length:numSq}, r => 0)
		// });
		return Array.from({length: numCols}, c => []);
	}

	render() {
		return (
			<div>
				<h1>Connect Four</h1>
				<Board boardData={this.state.boardData}
					onClickHandler={playPiece.bind(this)}/>
				}
			</div>
			);
	}
}

export default App;