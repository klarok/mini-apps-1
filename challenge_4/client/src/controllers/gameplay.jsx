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
		player: (this.state.player === 'red') ? 'black' : 'red',
		boardData: update
	});
}
