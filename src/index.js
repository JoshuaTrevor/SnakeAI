import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Snakegame from './Snakegame';
import NeuralNet from './FFNeuralNetwork'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    < Snakegame />
  </React.StrictMode>,
  document.getElementById('root')
);

var i = 0;

const timer = ms => new Promise(res => setTimeout(res, ms))

async function run()
{
  while(i < 100000)
  {
    var nextMove = NeuralNet.getMove();
    window.snakeComponent.move(nextMove);
    await timer(100);
    i++;
  }
}

run();




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
