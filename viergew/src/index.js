import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
      <button className={props.color[props.nummer]}>
        {props.value}
      </button>
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
            squares: Array(81).fill(null),
            xIsNext: true,
            color: Array(81).fill("squares_white")
        };
    }

    handleClick(i) {
        const squares = this.state.squares;
        if (squares[i]) {
            if (i+9 <= 80) {
                this.handleClick(i+9);
                return;
            } else {
                return;
            }
        }
        squares[i] = true;
        var color = this.state.color;
        color[i] = this.state.xIsNext ? "squares_red" : "squares_yellow";
        this.setState({
            squares : squares,
            xIsNext: !this.state.xIsNext,
            color: color
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
            </div>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
            value={this.props.squares[i]}
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
                {this.renderButton(7)}
                {this.renderButton(8)}
            </div>
            <div className="board-row">
                {this.renderSquare(72)}
                {this.renderSquare(73)}
                {this.renderSquare(74)}
                {this.renderSquare(75)}
                {this.renderSquare(76)}
                {this.renderSquare(77)}
                {this.renderSquare(78)}
                {this.renderSquare(79)}
                {this.renderSquare(80)}
            </div>
            <div className="board-row">
                {this.renderSquare(63)}
                {this.renderSquare(64)}
                {this.renderSquare(65)}
                {this.renderSquare(66)}
                {this.renderSquare(67)}
                {this.renderSquare(68)}
                {this.renderSquare(69)}
                {this.renderSquare(70)}
                {this.renderSquare(71)}
            </div>
            <div className="board-row">
                {this.renderSquare(54)}
                {this.renderSquare(55)}
                {this.renderSquare(56)}
                {this.renderSquare(57)}
                {this.renderSquare(58)}
                {this.renderSquare(59)}
                {this.renderSquare(60)}
                {this.renderSquare(61)}
                {this.renderSquare(62)}
            </div>
            <div className="board-row">
                {this.renderSquare(45)}
                {this.renderSquare(46)}
                {this.renderSquare(47)}
                {this.renderSquare(48)}
                {this.renderSquare(49)}
                {this.renderSquare(50)}
                {this.renderSquare(51)}
                {this.renderSquare(52)}
                {this.renderSquare(53)}
            </div>
            <div className="board-row">
                {this.renderSquare(36)}
                {this.renderSquare(37)}
                {this.renderSquare(38)}
                {this.renderSquare(39)}
                {this.renderSquare(40)}
                {this.renderSquare(41)}
                {this.renderSquare(42)}
                {this.renderSquare(43)}
                {this.renderSquare(44)}
            </div>
            <div className="board-row">
                {this.renderSquare(27)}
                {this.renderSquare(28)}
                {this.renderSquare(29)}
                {this.renderSquare(30)}
                {this.renderSquare(31)}
                {this.renderSquare(32)}
                {this.renderSquare(33)}
                {this.renderSquare(34)}
                {this.renderSquare(35)}
            </div>
            <div className="board-row">
                {this.renderSquare(18)}
                {this.renderSquare(19)}
                {this.renderSquare(20)}
                {this.renderSquare(21)}
                {this.renderSquare(22)}
                {this.renderSquare(23)}
                {this.renderSquare(24)}
                {this.renderSquare(25)}
                {this.renderSquare(26)}
            </div>
            <div className="board-row">
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
                {this.renderSquare(16)}
                {this.renderSquare(17)}
            </div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div> 
        </div>
      );
    }
  }


ReactDOM.render(<Main />, document.getElementById('root'));
