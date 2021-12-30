import React from 'react';
import './Snakegame.css';

const initialState = {
  rows: 10,
  cols: 10,
  grid: [],
  x: 4,
  y: 4,
  foodX: 6,
  foodY: 6,
  bodyCoords: [[4, 4], [4, 5]]
};

class Snakegame extends React.Component
{
  constructor()
  {
    super();
    this.state = initialState;
    this.state.foodX = Math.floor(Math.random()*10);
    this.state.foodY = Math.floor(Math.random()*10);
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
    this.getSquareClass = this.getSquareClass.bind(this)

    console.log(this.state)
  }

  getSquareClass(x, y)
  {
    if(this.bodyContains(x, y))
      return "grid-item snake";
    else if(x === this.state.foodX && y === this.state.foodY)
      return "grid-item food"
    else return "grid-item"
  }
  
  keyPressed(event)
  {
    var appleEaten = false;
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

    var newFoodX = this.state.foodX
    var newFoodY = this.state.foodY

    //If snake collides with apple, replace it
    if(newHeadX === this.state.foodX && newHeadY === this.state.foodY)
    {
      appleEaten = true;

      //Continue trying to place the apple until it is not inside the snake. 
      //Inefficient and poor solution, will be replaced later.
      var shouldExit = false;
      while(!shouldExit)
      {
        newFoodX = Math.floor(Math.random()*10);
        newFoodY = Math.floor(Math.random()*10);
        shouldExit = !this.bodyContains(newFoodX, newFoodY);
      }
    }
    //If should die check here
    if(this.bodyContains(newHeadX, newHeadY) || newHeadX >= 10 || newHeadX < 0 || newHeadY >= 10 || newHeadY < 0)
    {
      this.setState(initialState);
      this.setState({bodyCoords : [[4, 4], [4,5]]})
    }

    //If should not die then make the move
    else
    {
      if(!appleEaten)
      {
        this.state.bodyCoords.pop();
      }
      this.state.bodyCoords.unshift([newHeadX, newHeadY])
    
      this.setState({
        x : newHeadX,
        y : newHeadY,
        foodX : newFoodX,
        foodY : newFoodY
      })
    }
    console.log(this.state.bodyCoords)
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
        className={this.getSquareClass(grid.col, grid.row)} ></div>
    })
    
    
    return (
      <div className="snake-container" onKeyDown={this.keyPressed} tabIndex="0">
        <div className="grid">{gridItems}</div>
      </div>
    )
  }
  
}

export default Snakegame;