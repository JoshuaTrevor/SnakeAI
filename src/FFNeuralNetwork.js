//This is a read-only transcription of the neural network I designed in my NEAT-JAVA project.
//It will parse a text file to create a feed forward neural network and then be used to determine which move the snake should make.

export default class NeuralNet {

    static getMove() 
    {
        this.prototype.readBrain();
        return(Math.floor(Math.random() / 0.3))
    }

    readBrain()
    {
        
    }

    //bestBrain = ""; //insert here flattened brain string with newline character replaced with | or something
  }

class Node 
{
    id = -1;
    outgoingEdges = new Object(); //List of connected nodes with their associated edge weight.
}


