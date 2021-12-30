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
  bodyCoords: [[4, 4], [4, 5]],
  movesSinceApple: 0
};

class Snakegame extends React.Component
{
  constructor()
  {
    super();
    window.snakeComponent = this;
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

    console.log(this.state)
  }

  getSquareClass = (x, y) =>
  {
    if(this.bodyContains(x, y))
      return "grid-item snake";
    else if(x === this.state.foodX && y === this.state.foodY)
      return "grid-item food"
    else return "grid-item"
  }

  keyPressed = (event) =>
  {
    this.move(event.keyCode - 37)
  }

  move = (keyCode) =>
  {
    var appleEaten = false;
    var newHeadX = this.state.x;
    var newHeadY = this.state.y;
    //To move, add a piece in the direction moved, and if there is not food there delete the tail
    switch(keyCode)
    {
      //Manual case
    //   case 0:
    //     newHeadX = this.state.x - 1;
    //     break;

    //   case 1:
    //     newHeadY = this.state.y - 1;
    //     break;

    //   case 2:
    //     newHeadX = this.state.x + 1;
    //     break;

    //   case 3:
    //     newHeadY = this.state.y + 1;
    //     break;

          //Auto case
      case 0:
        newHeadX = this.state.x - 1;
        break;

      case 2:
        newHeadY = this.state.y - 1;
        break;

      case 1:
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
      this.setState({movesSinceApple: 0});
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
    if(this.bodyContains(newHeadX, newHeadY) || this.outOfBounds(newHeadX, newHeadY) || this.state.movesSinceApple > 100 + this.state.bodyCoords.length * 5)
    {
      this.setState(initialState);
      newFoodX = Math.floor(Math.random()*10);
      newFoodY = Math.floor(Math.random()*10);
      this.setState({
        bodyCoords : [[4, 4], [4,5]],
        movesSinceApple: 0,
        foodX: newFoodX,
        foodY: newFoodY
      });
    }

    //If should not die then make the move
    else
    {
      if(!appleEaten)
      {
        this.state.bodyCoords.pop();
      }
      this.state.bodyCoords.unshift([newHeadX, newHeadY])
    
      let newMSA = this.state.movesSinceApple + 1;
      this.setState({
        x : newHeadX,
        y : newHeadY,
        foodX : newFoodX,
        foodY : newFoodY,
        movesSinceApple: newMSA
      },
      //this.getVision
      )
    }
  }

  outOfBounds(newHeadX, newHeadY)
  {
    return newHeadX >= 10 || newHeadX < 0 || newHeadY >= 10 || newHeadY < 0
  }

  //Check if the snake contains certain coordinates, used for rendering snake
  bodyContains = (x, y) =>
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

  getVision = () =>
  {
    const output = [];
    //Get the distance from food:
    output[0] = Math.min(Math.abs(this.state.x - this.state.foodX), 8.0)/8.0;
    output[1] = Math.min(Math.abs(this.state.y - this.state.foodY), 8.0)/8.0;

    //Get distance from death in each direction
    let directionOrder = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, 1], [1, -1], [-1, 1]]
    for(let i = 0; i < directionOrder.length; i++)
    {
      output[i+2] = this.getDistanceInDirection(directionOrder[i][0], directionOrder[i][1])
    }

    //Normalise values
    for(let i = 2; i < output.length; i++)
    {
      let ceil = 8.0;
      output[i] = Math.min(ceil, output[i])/ceil;
    }

    return output;
  }

  getDistanceInDirection = (xModifier, yModifier) =>
  {
    //Increment at least once else the snake is dead.
    let newHeadX = this.state.x + xModifier;
    let newHeadY = this.state.y + yModifier;
    let distance = 0;
    while(!this.bodyContains(newHeadX, newHeadY) && !this.outOfBounds(newHeadX, newHeadY))
    {
      newHeadX = newHeadX + xModifier;
      newHeadY = newHeadY + yModifier;
      distance++;
    }
    return distance;
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