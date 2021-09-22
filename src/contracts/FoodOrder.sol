pragma solidity ^0.5.16;

/*
Notes:
1. If a food is available its value is 0, else 1
*/

contract FoodOrder {
  address payable public canteenOwner;
  address payable public admin;  //college authority
  
  uint public numberOfFoods;  //Tracks the number of food items offered by the canteen
  uint public orderNumber;   //Tracks the order number
  uint public collegeFees = 5;   //Tracks the college commission on each order, defaults to 5%

//Sets the owner and admin. Initially both are same. Later admin changes canteenOwner.
  constructor () public{
    canteenOwner = address(msg.sender);
    admin = address(msg.sender);
  }

  struct FoodItem {
    string image;
    string name;
    uint price;
    uint available;
    string category;
  }

//number of orders
  struct OrderItem{
      address customer;
      string name;
      uint quantity;
      uint hostelOrCanteen;
      uint number;
      uint delivered;
      uint rating;
      uint totalPrice;
  }

  mapping(uint => FoodItem) public foods;
  mapping(uint => OrderItem) public orders;

//all events
  event ordered(uint orderNumber, string name, uint hostelOrTable, uint number);
  event deletedItem(string _name);
  event priceChanged(string name, uint _price);
  event availabilityChanged(string name, uint _available);
  event addedFood(string _name, uint _price, uint _available, string _category);
  event changedCollegeFees(uint _collegeFees);
  event changedCanteenOwner(address payable canteenOwner, address payable _canteenOwner);
  
//checks if owner
  modifier onlyOwner {
    require(address(msg.sender) == canteenOwner, "Not Owner");
    _;
  }
//checks if admin
  modifier onlyAdmin {
    require(address(msg.sender) == admin, "Not Admin");
    _;
  }
//checks if customer
  modifier onlyCustomer {
      require(address(msg.sender) != canteenOwner);
      _;
  }
  
//customer related
  function order(uint index, uint quantity, uint hostelOrCanteen, uint number) external payable onlyCustomer {
    require(index < numberOfFoods && index >= 0, "error!");
    uint price = foods[index].price * quantity;
    onOrder(msg.sender, foods[index].name, quantity, hostelOrCanteen, number, price);
    canteenOwner.transfer(price - price*collegeFees/100);
    admin.transfer(price - price*(100-collegeFees)/100);
    emit ordered(orderNumber-1, foods[index].name, hostelOrCanteen, number);
  }
  
  function onOrder(address _customer, string memory _name, uint _quantity, uint _hostelOrCanteen, uint _number, uint _totalPrice) internal {
    orders[orderNumber].customer = _customer;
    orders[orderNumber].name = _name;
    orders[orderNumber].quantity = _quantity;
    orders[orderNumber].hostelOrCanteen = _hostelOrCanteen;
    orders[orderNumber].number = _number;
    orders[orderNumber].delivered = 1;
    orders[orderNumber].rating = 0;
    orders[orderNumber].totalPrice = _totalPrice;
    orderNumber++;
  }
  
  //if value is 0, customer hasn't rated
  function onOrderDelivered(uint index, uint _rating) public onlyCustomer{
    require(orders[index].customer == msg.sender, "Can't rate!");
    require(orders[index].delivered == 0, "Order not yet delivered!");
    orders[index].rating = _rating;
  }

//canteen management related
  //if value is 1, then order hasn't been delivered
  function orderDeliver(uint index) public onlyOwner {
    orders[index].delivered = 0;
  }

  function addFood(string memory _image, string memory _name, uint _price, uint _available, string memory _category) public onlyOwner {
    foods[numberOfFoods].image = _image;
    foods[numberOfFoods].name = _name;
    foods[numberOfFoods].price = _price;
    foods[numberOfFoods].available = _available;
    foods[numberOfFoods].category = _category;
    emit addedFood(_name, _price, _available, _category);
    numberOfFoods++;
  }
  
  function imageChange(uint index, string memory _newImage) public onlyOwner{
      foods[index].image = _newImage;
  }
  
  function availabilityChange(uint index) public onlyOwner {
    require(numberOfFoods >= 0 && index < numberOfFoods, "error!");
    if(foods[index].available == 0){
      foods[index].available = 1;
    }
    else{
      foods[index].available = 0;
    }
    emit availabilityChanged (foods[index].name, foods[index].available);
  }

  function priceChange(uint index, uint _price) public onlyOwner {
    foods[index].price = _price;
    emit priceChanged (foods[index].name, _price);
  }

  function deleteItem(uint index) public onlyOwner {
     require(numberOfFoods >= 0 && index < numberOfFoods, "error!");
     emit deletedItem(foods[index].name);
     foods[index] = foods[numberOfFoods-1];
     delete foods[numberOfFoods-1];
     numberOfFoods--;
  }
  
//ownership can be changed only by college authorities
  function changeOwner(address payable _canteenOwner) public onlyAdmin {
      emit changedCanteenOwner(canteenOwner, _canteenOwner);
      canteenOwner = _canteenOwner;
  }

//college commission can be changed only by authorities
  function changeFees(uint _collegeFees) public onlyAdmin {
    collegeFees = _collegeFees;
    emit changedCollegeFees(_collegeFees);
  }
}
