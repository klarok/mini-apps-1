
///////////GAME STATE////////////////////////////////////////////////////
let theGame = {
	player: 'X',
	turnsTaken: 0,
	enabled: true,
	score: {X: 0, O: 0},
	boardData: [],

	isLegalPlay: function ([r, c]) {
		return this.boardData[r][c] === '' && this.enabled;
	},
	update: function([r, c]) {
		this.boardData[r][c] = this.player;
		this.turnsTaken++;
	},
	switchPlayer: function () { //For 'this' binding
		this.player = (this.player === 'X') ? 'O' : 'X';
	},
	generateBoard: function () {
		let board = [];
		while (board.length < 3) {
			board.push(['','','']);
		}
		this.boardData = board;
	},
	reset: function () {
		this.turnsTaken = 0;
		this.enabled = true;
		this.generateBoard();
	}
}

//////////PLAY GAME PIECE////////////////////////////////////////////////
let playPiece = (e) => {
	let loc = e.target.id.split(',').map(i => parseInt(i));
	if (theGame.isLegalPlay(loc)) {
		theGame.update(loc);
		renderPiece(e.target);
		checkStatus(theGame.player);
		theGame.switchPlayer();
	} else {
		if (theGame.enabled) {
			displayMessage('I can\'t let you do that. Try again.');
		} else {
			displayMessage('The game\'s already over.');
		}
	}
}


//////////CHECK GAME STATUS: ongoing, victory, tied?////////////////////
let gameOver = (winner = 'NO ONE') => {
	theGame.enabled = false;
	theGame.player = (winner === 'NO ONE') ? 'X' : winner;
	if (theGame.score.hasOwnProperty(winner)) {
		theGame.score[winner] += 1;
	}
	// console.log(theGame.score);
	displayMessage(`Winner: ${winner}`);
	renderScore();
};

let checkStatus = (p) => {
	if (checkRows(p) || checkColumns(p) || checkDiagonals(p)) { //Victory. Deactivate board
			gameOver(p);
	} else if (theGame.turnsTaken === 9) {
		gameOver();
	}
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


//////////MANIPULATE DOM/////////////////////////////////////
let bb = document.getElementById('message');
let bbDefault = 'Let\'s play a game.';
let scoreboard = document.getElementById('scoreboard');
let board = document.getElementById('board');

let renderBoard = () => {
	for (let r = 0; r < 3; r++) {
		let row = document.createElement('tr');
		row.className = 'row';
		for (let d = 0; d < 3; d++) {
			let square = document.createElement('td');
			square.className = 'square';
			square.id = `${r},${d}`;
			square.addEventListener('click', playPiece);
			row.appendChild(square);
		}
		board.appendChild(row);
	}
}

let renderScore = () => {
	let x = theGame.score.X;
	let o = theGame.score.O;
	scoreboard.children[0].innerHTML = `X: ${x}`;
	scoreboard.children[1].innerHTML = `O: ${o}`;
}
let clearBoard = (board) => {
	for (let r = 0; r < board.children.length; r++) {
		let row = board.children[r];
		for (let d = 0; d < row.children.length; d++) {
			row.children[d].innerHTML = '';
		}
	}
	board.style.opacity = '1';
}

let displayMessage = (message = bbDefault) => { //Communicate to the player
	bb.innerHTML = message;
}

let renderPiece = (target) => { //Set a piece on a specific square
	console.log('current player', theGame.player);
	target.innerText = theGame.player;
}

let resetBoard = () => {
	displayMessage();
	theGame.reset();
	clearBoard(board);
}

///////////MAIN//////////////////////////////////////////////
theGame.generateBoard();
displayMessage();
renderBoard();
renderScore();

document.getElementById('clear').addEventListener('click', resetBoard);
