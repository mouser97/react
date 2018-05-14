import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <label className={props.color[props.nummer]} />
    );
}

function Button(props) {
    return (
      <button className="button" onClick={props.onClick} />
    );
}

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(42).fill(null),
            xIsNext: true,
            color: Array(42).fill("squares_white"),
            player: "rot"
        };
    }

    handleClick(i) {
        const squares = this.state.squares;
        if (squares[i]) {
            if (i+7 <= 41) {
                this.handleClick(i+7);
                return;
            } else {
                return;
            }
        }
        squares[i] = true;
        var color = this.state.color;
        color[i] = this.state.xIsNext ? "squares_red" : "squares_yellow";
        var player = this.state.xIsNext ? "gelb" : "rot";
        this.setState({
            squares : squares,
            xIsNext: !this.state.xIsNext,
            color: color,
            player: player
        });
    }
    
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares={this.state.squares}
                        onClick={i => this.handleClick(i)}
                        color={this.state.color}
                    />
                </div>
                <div className="info">
                    <h1> Spieler {this.state.player} an der Reihe!</h1>
                </div>
            </div>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
            color={this.props.color}
            nummer={i}
        />
      );
    }

    renderButton(i) {
        return (
          <Button
            onClick={() => this.props.onClick(i)}
          />
        );
      }
  
    render() {
      return (
        <div>
            <div className="board-button">
                {this.renderButton(0)}
                {this.renderButton(1)}
                {this.renderButton(2)}
                {this.renderButton(3)}
                {this.renderButton(4)}
                {this.renderButton(5)}
                {this.renderButton(6)}
            </div>
            <div className="board-row">
                {this.renderSquare(35)}
                {this.renderSquare(36)}
                {this.renderSquare(37)}
                {this.renderSquare(38)}
                {this.renderSquare(39)}
                {this.renderSquare(40)}
                {this.renderSquare(41)}
            </div>
            <div className="board-row">
                {this.renderSquare(28)}
                {this.renderSquare(29)}
                {this.renderSquare(30)}
                {this.renderSquare(31)}
                {this.renderSquare(32)}
                {this.renderSquare(33)}
                {this.renderSquare(34)}
            </div>
            <div className="board-row">
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
                {this.renderSquare(25)}
                {this.renderSquare(26)}
                {this.renderSquare(27)}
            </div>
            <div className="board-row">
                {this.renderSquare(14)}
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
                {this.renderSquare(18)}
                {this.renderSquare(19)}
                {this.renderSquare(20)}
            </div>
            <div className="board-row">
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
            </div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
            </div> 
        </div>
      );
    }
  }


ReactDOM.render(<Main />, document.getElementById('root'));
