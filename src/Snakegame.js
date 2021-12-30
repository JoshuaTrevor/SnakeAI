import React from 'react';
import './Snakegame.css';

const initialState = {
  rows: 10,
  cols: 10,
  grid: [],
  x: 4,
  y: 4,
  bodyCoords: [[4, 4], [4, 5]]
};

class Snakegame extends React.Component
{
  constructor()
  {
    super();
    this.state = initialState;

    const grid = [];
    for (let row = 0; row < this.state.rows; row++) {
      for (let col = 0; col < this.state.cols; col++) {
        grid.push({
          row,
          col,
        })
      }
    }
    this.state.grid = grid;
    this.keyPressed = this.keyPressed.bind(this)
    this.bodyContains = this.bodyContains.bind(this)

    console.log(this.state)
  }
  
  keyPressed(event)
  {
    var newHeadX = this.state.x;
    var newHeadY = this.state.y;
    //To move, add a piece in the direction moved, and if there is not food there delete the tail
    switch(event.keyCode-37)
    {
      case 0:
        newHeadX = this.state.x - 1;
        break;

      case 1:
        newHeadY = this.state.y - 1;
        break;

      case 2:
        newHeadX = this.state.x + 1;
        break;

      case 3:
        newHeadY = this.state.y + 1;
        break;
    }

    //If should die check here

    //If should not die then make the move

    this.state.bodyCoords.pop();
    this.state.bodyCoords.unshift([newHeadX, newHeadY])
    
    this.setState({
      x : newHeadX,
      y : newHeadY
    })
    console.log(this.state.bodyCoords)
    console.log(this.state.x + "," + this.state.y)
  }

  //Check if the snake contains certain coordinates, used for rendering snake
  bodyContains(x, y)
  {
    for(let i = 0; i < this.state.bodyCoords.length; i++)
    {
      if(this.state.bodyCoords[i][0] === x && this.state.bodyCoords[i][1] === y)
      {
        return true;
      }
    }
    return false;
  }

  render () {
    const gridItems = this.state.grid.map((grid) => {
      return <div 
        x={grid.col} 
        y={grid.row}
        key={grid.row.toString() + ":" + grid.col.toString()}
        className={this.bodyContains(grid.col, grid.row) ? "grid-item snake" : "grid-item"} ></div>
    })
    
    
    return (
      <div className="snake-container" onKeyDown={this.keyPressed} tabIndex="0">
        <div className="grid">{gridItems}</div>
      </div>
    )
  }
  
}

export default Snakegame;