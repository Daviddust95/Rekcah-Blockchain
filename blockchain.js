const SHA256 = require("crypto-js/sha256");

// Classe que representa um bloco na Blockchain
class CryptoBlock {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.computedHash();
        this.nonce = 0;
    }

    // Calcula o hash do bloco com base nos seus atributos
    computedHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    // Implementa o algoritmo de prova de trabalho (mineração)
    proofOfWork(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.computedHash();
        }
    }
}

// Classe que representa a Blockchain
class CryptoBlockchain {
    constructor() {
        // Inicializa a cadeia com o bloco de gênese
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = 4; // Nível de dificuldade para a prova de trabalho
    }

    // Cria o bloco de gênese
    startGenesisBlock() {
        return new CryptoBlock(0, "31/05/2022", "Genesis Block", "0");
    }

    // Retorna o bloco mais recente na cadeia
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    // Adiciona um novo bloco à Blockchain
    addBlock(newBlock) {
        newBlock.previousHash = this.obtainLatestBlock().hash;
        newBlock.proofOfWork(this.difficulty); // Realiza a prova de trabalho antes de adicionar à cadeia
        this.blockchain.push(newBlock);
    }

    // Verifica a validade da cadeia, garantindo integridade dos blocos
    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];

            // Verifica se o hash atual do bloco é válido
            if (currentBlock.hash !== currentBlock.computedHash()) {
                return false;
            }

            // Verifica se o bloco anterior aponta corretamente para o atual
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

// Exemplo de uso da Blockchain
let crypto = new CryptoBlockchain();

// Adiciona dois blocos à Blockchain
console.log("Mining a new block");
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

// Exibe a Blockchain
console.log(JSON.stringify(crypto, null, 4));
