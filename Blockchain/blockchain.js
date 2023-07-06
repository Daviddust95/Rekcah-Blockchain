import Block from './block.js';

//const Block = require('./block');

class Blockchain {

constructor () { 

this.chain =[Block.genesis()];



}

addBlock({data}) {

const newBlock = Block.mineBlock ({
    
lastBlock: this.chain.chain[this.chain.length -1],
data
})


this.chain.push(newBlock)
}

}

export default Blockchain

//module.exports = Blockchain;
