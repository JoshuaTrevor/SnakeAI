//This is a read-only transcription of the neural network I designed in my NEAT-JAVA project.
//It will parse a text file to create a feed forward neural network and then be used to determine which move the snake should make.

export default class NeuralNet {
    bestBrainStr = "";
    loadedBrain = [];

    //Attempt to load brain, return true if successful to save attempts.
    static initialise()
    {
        if(this.prototype.loadedBrain != null && this.prototype.loadedBrain.length !== 0)
        {
            return true;
        }

        else
        {
            this.prototype.readBrain();
            let brainStr = this.prototype.bestBrainStr;
            if(brainStr == null) return;

            this.prototype.loadedBrain = this.prototype.interpretBrain(brainStr);
            
            return false;
        }
    }

    static getMove(inputs) 
    {
        try
        {
            //Get preference for each move
            let output = this.prototype.processInputs(inputs, this.prototype.loadedBrain)
            
            //Convert hot one to move index
            let maxVal = -1000;
            let maxValIndex = -1;
            for(let i = 0; i < output.length; i++)
            {
                if(output[i] > maxVal)
                {
                    maxVal = output[i];
                    maxValIndex = i;
                }
            }
            return maxValIndex;

        } catch(e) {
            console.log("Error loading move");
            return 0;
        }
    }

    //Given input node values, propogate through neural net to get values of output nodes.
    processInputs(inputs, brain)
    {
        let inputValues = inputs;

        //Create nodes list to store activation values
        //(much more efficient to do this when generating the brain, but better for readability this way. Revisit if slow.)
        let nodeList = []

        //Initialise nodeList values to 0
        for(let i = 0; i < brain.length-1; i++)
        {
            let nodesInNextLayer = brain[i][0].length;
            nodeList[i+1] = new Float32Array(nodesInNextLayer);
        }

        //Normalise inputs later
        let normalisedInputs = inputValues;
        //Set input layer to input values before continuing with activation/propagation
        nodeList[0] = normalisedInputs;
 
        for(let layerIndex = 0; layerIndex < brain.length; layerIndex++)
        {
            for(let nodeIndex = 0; nodeIndex < brain[layerIndex].length; nodeIndex++)
            {
                //Calculate the activation of the node
                nodeList[layerIndex][nodeIndex] = this.activationFunction(nodeList[layerIndex][nodeIndex])

                //Propagate to connected nodes in next layer
                for(let edgeIndex = 0; edgeIndex < brain[layerIndex][nodeIndex].length; edgeIndex++)
                {
                    //The connected node(2) should be incremented by the product of this node(1)'s edge weight multiplied by this node(1)'s activation
                    nodeList[layerIndex+1][edgeIndex] += nodeList[layerIndex][nodeIndex] * brain[layerIndex][nodeIndex][edgeIndex];
                }
            }
        }
        return nodeList[nodeList.length-1];
    }

    //Uniformly modify data to imitate the activation function of the training library.
    activationFunction(input)
    {
        return (1.0/( 1.0 + Math.pow(Math.E, (-1.0 * input))));
    }

    //Convert string into usable data structure
    interpretBrain(brainStr)
    {
        let brainLines = brainStr.split("[NewLine]");

        //First determine the shape of the brain by counting layers and edges
        //Because it's fully connected, we can deduce nodes by edges in previous layer
        //then use a map to store activation energy of each node based on cumulative edge inputs
        let currentLayer = 0;
        let currentNode = 0;
        let brain = []; //May need to change brain structure later if we don't want fully connected
        for(let i = 0; i < brainLines.length; i++)
        {
            if(brainLines[i].startsWith("Layer: "))
            {
                currentLayer = parseInt(brainLines[i].split(": ")[1]);
                brain.push([]);
            }
            
            else if(brainLines[i].startsWith("Node: "))
            {
                currentNode = parseInt(brainLines[i].split(": ")[1]);
                brain[currentLayer].push([]);
            }

            //Could use first value as test to see if they match index?
            else if(brainLines[i].startsWith("Connection to: "))
            {
                let edgeWeight = parseFloat(brainLines[i].split("-- ")[1]);
                brain[currentLayer][currentNode].push(edgeWeight);
            }
        }

        return brain;
        //console.log(brain);
    }

    //Access file and extract brain string
    readBrain()
    {
        fetch('./ManyHours.txt')
        .then((r) => r.text())
        .then(text  => {
            this.bestBrainStr = text;
        })
    }
  }


