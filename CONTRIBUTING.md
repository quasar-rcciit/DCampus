# Contributing Guidelines

You may :
- work on active issues.
- add any useful feature to this app.
- improve the ui/ux of this app.
- report any bug in this app that you have discovered.
- fix any broken code.
- edit README.md to make it easy to understand.  

## Steps to setup and run this Dapp in localhost:

1. **Fork** and **clone** this repo in local machine.
2. Run `npm install` in the in the project directory. This would install all dependencies.
3. Download **Ganache** from the [official website](https://www.trufflesuite.com/ganache). Also add & setup **MetaMask** in browser. We recommend you to follow [this](https://www.trufflesuite.com/docs/truffle/getting-started/truffle-with-metamask).
4. Install `truffle` by following [this](https://www.trufflesuite.com/docs/truffle/getting-started/installation).
5. Start **Ganache**, create a `New Workspace`, and add your project by going to the `src` directory and selecting `truffle-config.js`. After this, save this workspace. This would start **Ganache** with 10 ethereum accounts, containg 100 ether each.
6. Now go to `src` directory, open a terminal and run `truffle migrate --reset`. This would compile the smart contracts and deploy the contracts in the local blockchain (Ganache).
7. Open **MetaMask** in your browser and select the network to `custom RPC`. Here, **add** a new network. For this, the RPC URL should be the URL shown in your Ganache. The chain id would be the same as the network id in Ganache.
8. Now select the first account shown in **Ganache**, and click on the `key` icon. This would bring up the private key for the account. Copy this private key. Now go to *MetaMask* (the network should be the custom network you just created), and click on `import account`. Paste the previously copied private key and and click on *import*.
9. MetaMask now should be showing the address of the first *Ganache* account with 100 ether in it. This is your *college admin* account. The one who deploys the contracts in always the *admin*.
10. Run `npm start` in the main project directory. This would start the frontend.

### Refer to this flowchart for the full procedure:

![image](https://user-images.githubusercontent.com/74824675/134613157-bb9be3f8-540a-4dca-8aea-ebd183d88773.png)

<hr>

## Steps to be followed before giving any pull request:

- Give a good commit message to your PR.
- Request a review from our maintainer @soham4abc.
- Add the following labels to your PR.
  - `hackoctoberfest`
