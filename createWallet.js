const TronWeb = require('tronweb');
var crypto = require('crypto');
var privateKey = crypto.randomBytes(32).toString('hex');
console.log("Private Key", privateKey);

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);

const wallet = tronWeb.createAccount();
console.log(wallet);