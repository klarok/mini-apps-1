
//TODO: bind state-holding component to this function
exports.playPiece = function (e) {
	let pos = e.target.id.split(',').map(coord => parseInt(coord));
	let col = pos[0];
	let sq = pos[1];
	//Check if filled already
	if (this.state.boardData[col].length >= 6) {
		console.log('Column\'s full, go somewhere else.');
		return;
	}

	let update = this.state.boardData.slice();
	update[col].push(this.state.player);
	this.setState({
		// player: (this.state.player === 'red') ? 'black' : 'red',
		moves: this.state.moves + 1,
		boardData: update
	}, (err) => {
		if (err) throw err;
		this.setState({
		player: (this.state.player === 'red') ? 'black' : 'red'
		});
		console.log(this.state);
		console.log(checkStatus(this.state.boardData, this.state.player));	
		// checkStatus(this.state.boardData)
		// 	.then	
	});
}

let checkStatus = (boardData, player) => {
	//Check victories
	//Check if tied game
	return checkColumns(boardData, player) || 
			checkRows(boardData, player) ||
			checkMinorDiagonals(boardData, player) ||
			checkMajorDiagonals(boardData, player);
}

//NOTE: Columns relative to the rendered board; each boardData array is a column
//since they're rotated 90 degrees from each other
//Check until there aren't enough spaces remaining to make a 4-in-a-row
let checkColumns = (boardData, player) => {
	for (let i = 0; i < boardData.length; i++) {
		let col = boardData[i];
		if (col.length >= 4) {
			if (gotFourInARow(col, player)) {
				return true;
			}
		}
	}
	return false;
}

let checkRows = (boardData, player) => {
	//Construct checkable rows
	for (let r = 0; r < 6; r++) {
		let row = [];
		for (let c = 0; c < 7; c++) {
			row.push(boardData[c][r]);
		}
		if (gotFourInARow(row, player)) {
			return true;
		}
	}
	return false;
}

let checkMinorDiagonals = (boardData, player) => {
	for (let start = -2; start < 4; start++) {
		let diagonal = [];
		for (let c = start; c < 7; c++) {
			if (c >= 0) {
				diagonal.push(boardData[c][c - start]);	
			}
		}
		// console.log(diagonal);
		if (gotFourInARow(diagonal, player)) {
			return true;
		}
	}
	return false;
}

let checkMajorDiagonals = (boardData, player) => {
	let rTop = 5;

	for (let start = -2; start < 4; start++) {
		let diagonal = [];
		for (let c = start; c < 6; c++) {
			if (c >= 0) {
				diagonal.push(boardData[c][rTop - (c - start)]);
			}
		}
		if (gotFourInARow(diagonal, player)) {
			return true;
		}
	}
	return false;
}

let gotFourInARow = (sequence, player) => {
	//Generate four-in-a-row, trim off []s
	let win = JSON.stringify(Array.from({length: 4}, sq => player)).slice(1, -1);
	return JSON.stringify(sequence).indexOf(win) > -1;
}

