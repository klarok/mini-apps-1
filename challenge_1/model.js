///////////  STATE  ///////////////////////////////////////////////////////
let theGame = {
	player: 'X',
	turnsTaken: 0,
	enabled: true,
	rotationWithGravityEnabled: false,
	score: {X: 0, O: 0},
	boardData: [],

	isLegalPlay: function ([r, c]) {
		return this.boardData[r][c] === '' && this.enabled;
	},
	update: function([r, c]) {
		this.boardData[r][c] = this.player;
		this.turnsTaken++;
		this.rotate();
		renderBoard(this.boardData);
		if (checkStatus(this.player)) {//Winner
			gameOver(this.player);
		} else if (this.turnsTaken === 9) {//Tied game
			gameOver();
		} else { //No winner yet, turns remain
			this.switchPlayer();
		}
	},
	switchPlayer: function () {
		this.player = (this.player === 'X') ? 'O' : 'X';
	},
	generateBoard: function () {
		let board = [];
		while (board.length < 3) {
			board.push(['', '', '']);
		}
		this.boardData = board;
	},
	reset: function () {
		this.turnsTaken = 0;
		this.enabled = true;
		this.rotationWithGravityEnabled = false;
		this.generateBoard();
	},
	rotate: function() {
		if (this.rotationWithGravityEnabled) {
			this.boardData = rotateWithGravity(this.boardData);
		}
	},
	toggleRotation: function() {
		this.rotationWithGravityEnabled = !this.rotationWithGravityEnabled;
	}
}


///////////  RESET  ////////////////////////////////////////////
let gameOver = (winner = 'NO ONE') => {
	theGame.enabled = false;
	theGame.player = (winner === 'NO ONE') ? 'X' : winner;
	if (theGame.score.hasOwnProperty(winner)) {
		theGame.score[winner] += 1;
	}
	renderGameOver(winner);
};


//////////  CHECK GAME STATUS  ////////////////////////////
let checkStatus = (p) => {
	return (checkRows(p) || checkColumns(p) || checkDiagonals(p));
};

let checkRows = (p) => {
	for (let r = 0; r < 3; r++) {
		if (compareArrays(theGame.boardData[r], p)) {
			return true;
		}
	}
	return false;
};
let checkColumns = (p) => {
	for (let i = 0; i < 3; i++) {
		let column = [
			theGame.boardData[0][i], 
			theGame.boardData[1][i], 
			theGame.boardData[2][i]
		];
		if (compareArrays(column, p)) {
			return true;
		}
	}
	return false;
}
let checkDiagonals = (p) => {
	let minor = [];
	let major = [];
	for (let i = 0; i < 3; i++) {
		minor.push(theGame.boardData[i][i]);
		major.push(theGame.boardData[2 - i][i]);
	}
	if (compareArrays(minor, p) || 
		compareArrays(major, p)) {
		return true;
	}
	return false;
}

let compareArrays = (a, p) => {
	return JSON.stringify(a) === JSON.stringify([p, p, p]);
};
//////// ROTATION BEHAVIOR //////////////////////////
//Rotate a square matrix 90 degrees CW
let rotateMatrix = matrix => {
	let rot = [];
	for (let c = 0; c < matrix.length; c++) {
		let newRow = []
		for (let r = matrix.length - 1; r > -1; r--) {
			newRow.push(matrix[r][c]);
		}
		rot.push(newRow);
	}
	return rot;
};

let rotateMatrixCCW = matrix => {
	let rot = [];
	for (let c = matrix.length - 1; c > -1; c--) {
		let newRow = [];
		for (let r = 0; r < matrix.length; r++) {
			newRow.push(matrix[r][c] || '');
		}
		rot.push(newRow);
	}
	return rot;
}

let rotateWithGravity = matrix => {
	let gravitated = [];
	for (let i = 0; i < matrix.length; i++) {
		//Eliminate empty spots, i.e. 'apply sideways gravity'
		gravitated.push(
			matrix[i].filter(item => item !== '')
		); 
	}
	return rotateMatrixCCW(gravitated);
};

