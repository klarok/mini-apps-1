let player = 'X';
let turnsTaken = 0;
let boardData;

//Set piece on board
let playPiece = (e) => {
	if (e.target.innerText === '') {
		e.target.innerText = player;
		let position = e.target.id.split(',').map(i => parseInt(i));
		boardData[position[0]][position[1]] = player;
		turnsTaken++;
		checkStatus(player);
		player = (player === 'X') ? 'O' : 'X';
	}
}
//Check for three-in-a-row, cat's game
let checkStatus = (p) => {
	if (turnsTaken <= 9) { //Check for winner
		if (checkRows(p)) { //Victory. Deactivate board
			document.getElementById('message').innerText = `Results: ${p} wins.`;
			//console.log(`${p} wins.`);
			return;
		}
	}
	if (turnsTaken === 9) {
		document.getElementById('message').innerText = `Results: No one wins.`;
		console.log('Tie game');
	}
};

let checkRows = (p) => {
	for (let r = 0; r < 3; r++) {
		if (compareArrays(boardData[r], [p, p, p])) {
			return true;
		}
	}
	return false;
};

let compareArrays = (a, b) => {
	return JSON.stringify(a) === JSON.stringify(b);
};

var generateBoard = () => {
	let board = [];
	while (board.length < 3) {
		board.push(['','','']);
	}
	return board;
};

var renderBoard = () => {
	let board = document.getElementById('board');
	board.innerHTML = '';
	for (let r = 0; r < 3; r++) {
		let row = document.createElement('div');
		row.className = 'row';
		for (let s = 0; s < 3; s++) {
			let square = document.createElement('div');
			square.className = 'square';
			square.id = `${r},${s}`;
			square.appendChild(document.createTextNode(boardData[r][s]));
			square.addEventListener('click', playPiece);
			row.appendChild(square);
		}
		board.append(row);
	}
}

let clearBoard = () => {
	turnsTaken = 0;
	player = 'X';
	boardData = generateBoard();
	document.getElementById('message').innerHTML = 'Results:';
	renderBoard();
}
boardData = generateBoard();
renderBoard();
document.getElementById('clear').addEventListener('click', clearBoard);
