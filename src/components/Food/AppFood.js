import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodOrder from '../build/contracts/FoodOrder.json';
import "./studentf.css";
import Student from "./Studentf";
import Admin from "./Adminf";
import Owner from "./Ownerf";
const Web3 = require('web3');

class AppFood extends Component{
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  // =============================== WEB3 (talk to web3)
  async loadWeb3() {
    //Setting up Web3
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  // =============================== Load Blockchain with WEB3 (check via inspect console)
  async loadBlockchainData() {
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] }); //============ METAMASK 1st account Address

    const networkId = await web3.eth.net.getId();
    const networkData = FoodOrder.networks[networkId]; // Collect network id (like in Ganache : 5777)
    //IF got connection, get data from contracts
    if (networkData) {
      const foodOrder = new web3.eth.Contract(FoodOrder.abi, networkData.address);
      this.setState({ foodOrder });

      const no_of_cards = await foodOrder.methods.numberOfFoods().call();
      this.setState({ no_of_cards });

      const ownerAddress = await foodOrder.methods.canteenOwner().call();
      this.setState({ ownerAddress });

      const collegeFees = await foodOrder.methods.collegeFees().call();
      this.setState({ collegeFees });

      for (var i = 0; i < no_of_cards; i++) {
        const foodItem = await foodOrder.methods.foods(i).call();
        this.setState({
          foods: [...this.state.foods, foodItem],
        });
      }
    } else {
      window.alert("FoodOrder contract not deployed to detected network.");
    }
  }

  addFood = (name, price, category, available) => {
    //Set state to loading
    this.setState({ loading: true });

    this.state.foodOrder.methods
      .addFood(name, price, category, available)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  changeOwner = (address) => {
    //Set state to loading
    this.setState({ loading: true });

    this.state.foodOrder.methods
      .changeOwner(address)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  changeFees = (fees) => {
    //Set state to loading
    this.setState({ loading: true });

    this.state.foodOrder.methods
      .changeFees(fees)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  order = (index, hostelOrCanteen, number) => {
    this.state.foodOrder.methods
      .order(index, hostelOrCanteen, number)
      .send({ from: this.state.account, value: this.state.foods[index].price })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  deleteItem = (index) => {
    this.state.foodOrder.methods
      .deleteItem(index)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  availabilityChange = (index) => {
    this.state.foodOrder.methods
      .availabilityChange(index)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  priceChange = (index, price) => {
    this.state.foodOrder.methods
      .priceChange(index, price)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          //after completion of upload ..initial state
          loading: false,
          //type: null,
          //name: null,
        });
        window.location.reload(); //will reload the screen immedeately
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      foodOrder: null,
      foods: [],
      no_of_cards: 0,
      loading: false,
      ownerAddress: 0,
      collegeFees: 0,
      // type: null,
      //name: null,
    };
    this.order=this.order.bind(this);
  }
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/foodiegenie">
              <Student
              no_of_cards={this.state.no_of_cards}
              order={this.order}
              foods={this.state.foods}
            />
            </Route>
            <Route path="/foodiegenie-admin">
              <Admin
              changeFees={this.changeFees}
              changeOwner={this.changeOwner}
              ownerAddress={this.state.ownerAddress}
              collegeFees={this.state.collegeFees}
            />
            </Route>
            <Route path="/foodiegenie-owner">
              <Owner
              addFood={this.addFood}
              foods={this.state.foods}
              deleteItem={this.deleteItem}
              availabilityChange={this.availabilityChange}
              priceChange={this.priceChange}
            />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppFood;