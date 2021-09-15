const Web3 = require('web3');
const url = 'http://localhost:8545';

const web3_connect = () => {
    const web3 = new Web3(url);
    return web3;
}

export default web3_connect;