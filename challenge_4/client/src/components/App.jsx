import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>Connect Four</h1>
				<Board />
			</div>
			);
	}
}

export default App;