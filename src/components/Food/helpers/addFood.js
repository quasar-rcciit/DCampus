import web3_connect from './web3_connect';
const FoodOrder = require('../../build/FoodOrder.json');

const addFoodItem = async (username, price, availability)=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];

    const web3 = web3_connect();
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
        FoodOrder.abi,
        FoodOrder.networks[networkId].address
    );

    const tx = myContract.methods.addFood(username.toString(), parseInt(price), parseInt(availability));  //hard-coded as of now. need to get it dynamically.

    // const gas = await web3.utils.toHex(tx.estimateGas({from: account}));
    // const gasPrice = await web3.utils.toHex(web3.eth.getGasPrice());
    const data = web3.utils.toHex(tx.encodeABI());
    // const data = web3.utils.tx.encodeABI();
    const nonce = await web3.utils.toHex(web3.eth.getTransactionCount('0x33C7C45fC6ffA59943C39f7318D303AD79faE42a')); //contract address

    window.ethereum
        .request({
        method: 'eth_sendTransaction',
        params: [
            {
            from: account,
            data: data,
            to: '0x33C7C45fC6ffA59943C39f7318D303AD79faE42a', //contract address
            value: '0x00',
            // gasPrice: gasPrice,
            // gas: gas,
            nonce: nonce,
            },
        ],
        })
  }

export default addFoodItem;