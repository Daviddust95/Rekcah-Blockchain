//Algoritmos que serão executados pela máquina.

//armazenar informações nas variáveis e estruturas de dados.

//trabalhar com esses dados.

//Hash é uma síntese      função hash  >>

// quantidade maior de zeros = dificuldade de mineração do algoritmo
const {GENESIS_DATA} = require('./config')
class Block {

    constructor({ data, hash, nonce, difficulty, timestamp, lasthash }) { 

this.data = data;

this.hash = hash;
this.lasthash = lasthash
this.nonce = nonce;
this.difficulty = difficulty;
this.timestamp = timestamp;
}

static genesis () {

    return new this(GENESIS_DATA);

}

static mineBlock({  lastBlock , data  }) {

const lastHash = lastBlock.hash;

let hash, timestamp;

let (difficulty) = lastBlock;

let nonce = 0;

do {
nonce++;
timestamp = Date.now()

hash = cryptoHash(timestamp, lastHash, difficulty, nonce)
} 
while (hexToBinary(hash).substring(0,difficulty))

return new this (timestamp, lastHash, data, difficulty, nonce, hash)


}



}
const GENESIS_DATA = {
    timestamp: 1,
    lasthash: '----------',
    hash: "abcde",
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};