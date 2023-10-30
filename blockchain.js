const SHA256 = require("crypto-js/sha256");

class CryptoBlock {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.computedHash();
        this.nonce = 0;
    }

    computedHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    proofOfWork(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.computedHash();
        }
    }
}

class CryptoBlockchain {
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = 4;
    }

    startGenesisBlock() {
        return new CryptoBlock(0, "31/05/2022", "Genesis Block", "0");
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.obtainLatestBlock().hash;
        newBlock.proofOfWork(this.difficulty);
        this.blockchain.push(newBlock);
    }

    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== currentBlock.computedHash()) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

let crypto = new CryptoBlockchain();

console.log("mineirando um novo bloco");
crypto.addBlock(new CryptoBlock(1, "31/05/2022", 
    { 
        sender: "Jose",
        recipient: "Melo",
        quantity: 5,
    })
);

crypto.addBlock(new CryptoBlock(2, "29/10/2023", 
    { 
        sender: "Alisson",
        recipient: "David",
        quantity: 3,
    })
);

console.log(JSON.stringify(crypto, null, 4));
