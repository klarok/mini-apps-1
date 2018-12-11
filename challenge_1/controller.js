let playPiece = (e) => {
	let loc = e.target.id.split(',').map(i => parseInt(i));
	if (theGame.isLegalPlay(loc)) {
		renderPiece(e.target);
		theGame.update(loc);
	} else {
		if (theGame.enabled) {
			displayMessage('Invalid move.');
		} else {
			displayMessage('The game\'s already over.');
		}
	}
}

let reset = () => {
	displayMessage();
	theGame.reset();
	resetBoard(board);
}

document.getElementById('clear').addEventListener('click', reset);
//Player input name