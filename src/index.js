// import React, ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// import styles
import './index.css';

// class Square extends React.Component {
function Square(props) {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		value: null,
	// 	};
	// }

	// render(i) {
		return (
			<button className="square" onClick={props.onClick} >
				{props.value}
			</button>
		)
	// }
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		};
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({squares: squares})
	}

	renderSquare(i) {
		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">
					{status}
				</div>

				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div>
					<div>
						{/* status */}
					</div>
					<div>
						{/* TODO */}
					</div>
				</div>
			</div>
		)
	}
}

// ====================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
