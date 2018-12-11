//////////MANIPULATE DOM/////////////////////////////////////
let bb = document.getElementById('message');
let bbDefault = 'Let\'s play a game.';
let scoreboard = document.getElementById('scoreboard');
let tabletop = document.getElementById('tabletop');

let renderBoard = (boardData) => {
	tabletop.innerHTML = '';
	let board = document.createElement('div');
	board.id = 'board';
	//Add rows to div.board
	for (let r = 0; r < 3; r++) {
		let row = document.createElement('div');
		row.className = 'row';
		//Add squares to each row
		for (let sq = 0; sq < 3; sq++) {
			let square = document.createElement('div');
			square.className = 'square';
			square.id = `${r},${sq}`; 
			square.addEventListener('click', playPiece);
			if (!!boardData) {
				square.innerHTML = boardData[r][sq];
			}
			// square.innerHTML = square.id;
			row.appendChild(square);
		}
		board.appendChild(row);
	}
	tabletop.appendChild(board);
}

let renderPiece = (target) => { //Set a piece on a specific square
	target.innerText = theGame.player;
}

let renderGameOver = (winner) => {
	displayMessage(`WINNER: ${winner}`);
	renderScore();
}

let renderScore = () => {
	let x = theGame.score.X;
	let o = theGame.score.O;
	scoreboard.children[0].innerHTML = `X: ${x}`;
	scoreboard.children[1].innerHTML = `O: ${o}`;
}


let resetBoard = (board) => {
	tabletop.innerHTML = '';
	document.getElementById('toggle-rotation').checked = false;
	renderBoard();
}

let displayMessage = (message = bbDefault) => { //Communicate to the player
	bb.innerHTML = message;
}

///////////MAIN//////////////////////////////////////////////
theGame.generateBoard();
displayMessage();
renderBoard();
renderScore();


