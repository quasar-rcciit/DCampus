import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FoodOrder from "../build/contracts/FoodOrder.json";
import "./studentf.css";
import Student from "./Studentf";
import Admin from "./Adminf";
import Owner from "./Ownerf";
import AllOrders from "./AllOrders";
import Navbar from "./Navbar";
const Web3 = require("web3");

class AppFood extends Component {
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
    var web3 = window.web3;
    this.setState({ web3 });
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
      const foodOrder = new web3.eth.Contract(
        FoodOrder.abi,
        networkData.address
      );
      this.setState({ foodOrder });

      const no_of_cards = await foodOrder.methods.numberOfFoods().call();
      this.setState({ no_of_cards });

      const ownerAddress = await foodOrder.methods.canteenOwner().call();
      this.setState({ ownerAddress });

      const collegeFees = await foodOrder.methods.collegeFees().call();
      this.setState({ collegeFees });

      const canteenOwner = await foodOrder.methods.canteenOwner().call();
      this.setState({ canteenOwner });

      const admin = await foodOrder.methods.admin().call();
      this.setState({ admin });

      for (var i = 0; i < no_of_cards; i++) {
        const foodItem = await foodOrder.methods.foods(i).call();
        this.setState({
          foods: [...this.state.foods, foodItem],
        });
      }

      const orderNumber = await foodOrder.methods.orderNumber().call();
      this.setState({ orderNumber });

      for (var i = orderNumber - 1; i >= 0; i--) {
        const orderItem = await foodOrder.methods.orders(i).call();
        this.setState({
          orders: [...this.state.orders, orderItem],
        });
      }
    } else {
      window.alert("FoodOrder contract not deployed to detected network.");
    }
  }

  addFood = (image, name, price, category, available) => {
    this.setState({ loading: true });

    var priceInWei = this.state.web3.utils.toWei(price, "ether");

    this.state.foodOrder.methods
      .addFood(image, name, priceInWei, category, available)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  changeOwner = (address) => {
    this.setState({ loading: true });

    this.state.foodOrder.methods
      .changeOwner(address)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  changeFees = (fees) => {
    this.setState({ loading: true });

    this.state.foodOrder.methods
      .changeFees(fees)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  order = (index, quantity, hostelOrCanteen, number) => {
    this.setState({ loading: true });

    this.state.foodOrder.methods
      .order(index, quantity, hostelOrCanteen, number)
      .send({
        from: this.state.account,
        value: this.state.foods[index].price * quantity,
      })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  deleteItem = (index) => {
    this.setState({ loading: true });
    this.state.foodOrder.methods
      .deleteItem(index)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  availabilityChange = (index) => {
    this.setState({ loading: true });
    this.state.foodOrder.methods
      .availabilityChange(index)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  priceChange = (index, price) => {
    this.setState({ loading: true });
    console.log(price);

    var priceInWei = this.state.web3.utils.toWei(price, "ether");
    this.state.foodOrder.methods
      .priceChange(index, priceInWei)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  orderDeliver = (index) => {
    this.setState({ loading: true });
    const actualIndex = this.state.orderNumber - index - 1;
    this.state.foodOrder.methods
    .orderDeliver(actualIndex)
    .send({ from: this.state.account })
    .on("transactionHash", (hash) => {
      this.setState({
        loading: false,
      });
      window.location.reload();
    });
  };

  onOrderDelivered = (index, rating) => {
    const actualIndex = this.state.orderNumber - index - 1;
    this.setState({ loading: true });
    this.state.foodOrder.methods
      .onOrderDelivered(actualIndex, rating)
      .send({ from: this.state.account })
      .on("transactionHash", (hash) => {
        this.setState({
          loading: false,
        });
        window.location.reload();
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      foodOrder: null,
      foods: [],
      orders: [],
      no_of_cards: 0,
      orderNumber: 0,
      loading: false,
      ownerAddress: 0,
      collegeFees: 0,
      canteenOwner: "",
      admin: "",
      web3: null,
    };
    this.order = this.order.bind(this);
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/foodiegenie">
              <Navbar account={this.state.account} />
              <Student
                no_of_cards={this.state.no_of_cards}
                order={this.order}
                foods={this.state.foods}
                account={this.state.account}
                canteenOwner={this.state.canteenOwner}
                web3={this.state.web3}
              />
            </Route>
            <Route path="/admin">
              <Admin
                changeFees={this.changeFees}
                changeOwner={this.changeOwner}
                ownerAddress={this.state.ownerAddress}
                collegeFees={this.state.collegeFees}
                admin={this.state.admin}
                account={this.state.account}
                canteenOwner={this.state.canteenOwner}
              />
            </Route>
            <Route path="/foodiegenie-owner">
              <Navbar account={this.state.account} />
              <Owner
                addFood={this.addFood}
                foods={this.state.foods}
                deleteItem={this.deleteItem}
                availabilityChange={this.availabilityChange}
                priceChange={this.priceChange}
                canteenOwner={this.state.canteenOwner}
                account={this.state.account}
                web3={this.state.web3}
              />
            </Route>
            <Route path="/foodiegenie-orders">
              <Navbar account={this.state.account} />
              <AllOrders
                orders={this.state.orders}
                canteenOwner={this.state.canteenOwner}
                account={this.state.account}
                orderDeliver={this.orderDeliver}
                onOrderDelivered={this.onOrderDelivered}
                web3={this.state.web3}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppFood;
