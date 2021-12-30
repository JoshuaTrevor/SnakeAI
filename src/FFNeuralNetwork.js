//This is a read-only transcription of the neural network I designed in my NEAT-JAVA project.
//It will parse a text file to create a feed forward neural network and then be used to determine which move the snake should make.


export default class NeuralNet {
    static getMove() 
    {
        return(Math.floor(Math.random() / 0.3))
    }
  }