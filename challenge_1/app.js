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

let renderPiece = (target) => { //Set a piece on a specific square
	target.innerText = theGame.player;
}

let renderGameOver = (winner) => {
	displayMessage(`WINNER: ${winner}`);
	renderScore();
	board.style.opacity = '0.5';
}

let renderScore = () => {
	let x = theGame.score.X;
	let o = theGame.score.O;
	scoreboard.children[0].innerHTML = `X: ${x}`;
	scoreboard.children[1].innerHTML = `O: ${o}`;
}


let resetBoard = (board) => {
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

///////////MAIN//////////////////////////////////////////////
theGame.generateBoard();
displayMessage();
renderBoard();
renderScore();


