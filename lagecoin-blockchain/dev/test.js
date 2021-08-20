const Blockchain = require('./blockchain.js');

const lagecoin = new Blockchain(); //makes a new instance (or Brand) of our blockchain data structure (module)

//console.log(lagecoin);

//remember .createNewBlock() needs these 3 parameters: nonce, previousBlockHash, hash
lagecoin.createNewBlock(12342, 'AAA', 'BBB');
lagecoin.createNewBlock(5365, 'CCC', 'DDD');
lagecoin.createNewBlock(8676, 'EEE', 'FFF');

lagecoin.createNewTransaction(100, 'SEND', 'RECIEVE');
lagecoin.createNewTransaction(150,'SEND1','RECEIVE1');
lagecoin.createNewTransaction(200,'SEND2','RECIEVE2');


const previousBlockHash = 'SOYFELIZ';
const currentBlockData = 
[{
    "amount": 50,
    "sender": "ALEX00IIO99GHAHBA1",
    "recipient": "RODRIGOOOIJOI9ABAABAS1",
},
{
    "amount": 150,
    "sender": "ALEX00IIO99GHAHBA2",
    "recipient": "RODRIGOOOIJOI9ABAABAS2",
},
{
    "amount": 5,
    "sender": "ALEX00IIO99GHAHBA3",
    "recipient": "RODRIGOOOIJOI9ABAABAS3",
}
];
//const nonce = 100;

//console.log(lagecoin.hashBlock(previousBlockHash, currentBlockData,nonce));
//console.log(lagecoin.hashBlock);
//console.log(lagecoin.newTransactions); //Me da las nuevas transacciones
//console.log(lagecoin.chain[0]); //Me regresa un elemento específico de la cadena
//console.log(lagecoin.chain[lagecoin.chain.length -1]);



let nonce = lagecoin.proofOfWork(previousBlockHash, currentBlockData);
console.log('nonce from Proof of Work : ' + nonce);
console.log(lagecoin.hashBlock(previousBlockHash, currentBlockData, nonce));
console.log(lagecoin);