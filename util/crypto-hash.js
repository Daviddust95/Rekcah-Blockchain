import { createHash } from 'crypto';

//const crypto = require ('crypto');

const cryptoHash = (...input) => {

const hash = crypto.createHash('sha256')

hash.update (inputs.sort().join(''));

return hash.digest ('hex');
};

export default cryptoHash;

//module.exports = cryptoHash;