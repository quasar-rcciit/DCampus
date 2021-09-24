# DCampus - Campus Solutions Decentralised 💻
## Checkout the Dapp live at: https://d-campus.live/
#### This site is deployed on **rinkeby** test network. Your wallet should be connected to **rinkeby** for viewing this site.
-------

## Features

<details><summary><b>Library</b></summary>

[Search on Etherscan](https://rinkeby.etherscan.io/address/0xc682d112cb0999AeAaFf12B8E02DA5D125A44F17)<br>
- EBooks<br>
Students can download books(in pdf) available in their college library according to their choice. They also get reference to every books in Google Books.<br>
- Class Notes<br>
Here anyone can upload their class notes
but  only the uploader of that class note and librarian can remove them. Details of the notes can also be found like - Stream, Faculty Name,Class Date, upload date, name of the uploader.<br>Report option is also available (to all, other than the uploader), which will allow the librarian to maintain discipline.<br>
- Librarian<br>
Here college Librarian will be able to upload books and info-book name, book author, description about them in pdf format and can remove them as well.<br>
</details>

<details><summary><b>Foodiegenie</b></summary>

[Search on Etherscan](https://rinkeby.etherscan.io/address/0x5c53320Cd4A022d28f06E9F8c5F4F219Ecc7Ea08)<br>
- Students' section<br>
  Here Students will be able to see the available cuisines/food items in the college canteen,
where they will be able to place orders and pay, set their delivery location (hostel or canteen).<br>
- Owner's section<br>
The Owner of the canteen will be able to perform these functions: add new food items,change the price, remove any item, change the availability of any food, set the item category and image.<br>
- Previous Orders<br>
Owner and Students can keep a track on whatever they have ordered which includes ethereum address of the customer, order amount, ordered item name, ordered quantity, delivery location, room or table no, delivery status, order rating (by the customer), etc.<br>
</details>

<details><summary><b>PGConnect</b></summary>

[Search on Etherscan](https://rinkeby.etherscan.io/address/0xc34B1748c2920935b7219CcCA849527479eF5B46)<br>
- Students' section<br>
Students search pg options here nearest to the college. They can choose a perfect agreement among wide variety of options according to their needs. They have the power to dislike any service once they used it.<br>
- Landlords' section<br>
Landlords provide details about their offerings here. Details include room name, room address, rent per month, one time Security deposit. 
- Transactions<br>
All details regarding agreements and rent payment are listed here to aviod any sort of confusion between landlords and students.<br>
</details>

<b>College Admin's section</b><br>
The Admin of the college can change the current librarian if needed, PGConnect commision ,current Foodiegenie owner and Foodiegenie commission.

#### The prospect of the business model of this project depends on the fact that the college authorities (college admin, in this case) get a percent of the amounts transacted as commission (both in PGConnect and Foodiegenie).
<hr>

<details>
<summary> Videos </summary>

1. Uploading Books by Librarian  

https://user-images.githubusercontent.com/82683890/134495801-3e6903f2-25b9-4228-badb-59a02b3dae59.mp4 

2. Deleting Books by Librarian

 https://user-images.githubusercontent.com/82683890/134495902-a18a70e3-e9dd-4815-b717-dc02ab36a3da.mp4
 
3. LIBRARY EBooks

https://user-images.githubusercontent.com/82683890/134499247-be1e79ce-6ec2-4474-b040-fbe9d1370391.mp4

4. Uploading Class Notes by Student

https://user-images.githubusercontent.com/82683890/134497396-0301f035-b497-4a0b-86e9-0f5d0d174970.mp4

5. Reporting Class Notes by Student

https://user-images.githubusercontent.com/82683890/134508812-57ead368-f89e-4895-aef7-76f5b0dae91d.mp4

6. Deleting Class Notes by Student

https://user-images.githubusercontent.com/82683890/134505915-e5749c83-9466-4a66-b653-52a89e67c711.mp4
 
7. Deleting Class Notes by Librarian

https://user-images.githubusercontent.com/82683890/134500491-d6536ac2-d503-4e41-8ca0-187285000edf.mp4

8. Requesting Agreement Termination for PG

https://user-images.githubusercontent.com/82683890/134567856-cf138c8a-5130-4ba6-9102-3d0365cf45af.mp4

9. Adding Rooms for PG by Landlord

https://user-images.githubusercontent.com/82683890/134569018-bf8acbb1-b396-4ed3-98f4-4c7d2a37cf24.mp4

10. Signing Agreement by Student

https://user-images.githubusercontent.com/82683890/134573117-0e897bf4-6fd0-4fea-9143-c66ef56598a2.mp4

11. Disabling and Enabling Rooms for PG by Admin

https://user-images.githubusercontent.com/82683890/134575015-7bd148f9-4b57-4220-9409-797b16db2b6e.mp4

12. Functionality of Admin

https://user-images.githubusercontent.com/82683890/134577886-c65a5e08-788b-476b-b4b8-3c52eb03515b.mp4

13. Add Food

https://user-images.githubusercontent.com/82683890/134634371-ad7ddd0f-a1e1-45b7-8e1a-862b96800901.mp4

14. Canteen Owner Functionalities

https://user-images.githubusercontent.com/82683890/134635704-7466d1a8-017e-4883-9b75-c9a798103249.mp4

15. Order Food

https://user-images.githubusercontent.com/82683890/134633407-603fd5dd-d328-47cc-98c5-642eaba522c6.mp4

16. Deliver Food & Rate Food
    
https://user-images.githubusercontent.com/82683890/134637549-5c651d21-54ea-4ab4-a4af-5b8ae78cc207.mp4

</details>

<hr>

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

## Steps to carry out the transactions in localhost:

#### At the start, admin is both the librarian and canteen owner.
1. Import some more accounts from *Ganache* into *MetaMask*. Go to `Admin` section in the navbar of the web-application. Now, make one of the newly imported accounts the librarian. Also change the Canteen Owner. (This step is optional, it's just a feature to change the librarian and canteen owner, in case the college authorities want to authorize someone else for managing these sections.)
2. Now the respective addresses can perform the desired transactions. The addresses (other than admin, librarian and canteen owner) can be considered as students.

#### Try changing accounts in *MetaMask* (and then reloading the page) to see which account is authorized to perform the transactions in the page. If an account isn't authorized to perform a certain transaction, the respective button will appear disabled.


# Technologies used: (Development)
1. **Ethereum Blockchain**<br>
2. **IPFS**<br>
3. Web browser extension **Metamask** (recommended) or Nifty wallet.<br>
4. **Truffle**<br>
5. **React** (Html5, Css3, Bootstrap v5.1)<br>
6. **Node.js** (web3.js)<br>
7. **Ganache**<br>

# Technologies used: (Production Build)
1. The previous technologies used during development
2. Front-end deployment: **Netlify**<br>
3. Back-end deployment: **Infura**<br>
   
------
### Note: Using **Brave** browser will save the effort to add and setup Metamask as it has its own built-in wallet.
### Note: **Wait for the previous (or pending) transactions to be completed before attempting any further transactions.** This is because transactions take time to mine, forwarding the same transaction requests before completion of the previous, may result in an undesired output.


------

## If you have reached till here, we hope you have successfully run the Dapp in your local machine. Thank You for showing interest in our project. We wish to improve this Dapp in future with all your contributions. Made with ❤️ by Quasar.


