const Block = require('./block');

class Blockchain {

constructor () { 

this.chain =[Block.genesis()];



}

addBlock({}) {

const newBlock = Block.mineBlock ({
lastBlock: this.chain.chain[this.chain.length -1],
data
})


this.chain.push(newBlock)
}

}



