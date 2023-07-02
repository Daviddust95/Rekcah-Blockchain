//Algoritmos que serão executados pela máquina.

//armazenar informações nas variáveis e estruturas de dados.

//trabalhar com esses dados.

class Block {

    constructor({ data, hash, nonce, difficulty,timestamp,lasthash }) { 

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

}
const GENESIS_DATA = {
    timestamp: 1,
    lasthash: '----------',
    hash: "abcde",
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
}