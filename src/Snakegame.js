import React from 'react';
import './Snakegame.css';


class Snakegame extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      rows: 10,
      cols: 10,
      grid: [],
    };

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
  }
  
  
  render () {
    
    const gridItems = this.state.grid.map((grid) => {
      return <div 
        key={grid.row.toString() + '-' + grid.col.toString()} 
        className="grid-item" ></div>
    })
    
    return (
      <div className="snake-container">
        <div className="grid">{gridItems}</div>
      </div>
    )
  }
  
}

export default Snakegame;