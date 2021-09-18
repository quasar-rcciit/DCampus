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
    string name;
    uint price;
    uint available;
    string category;
  }

  mapping(uint => FoodItem) public foods;

//all events
  event ordered(uint orderNumber, uint index, uint hostelOrTable, uint number);
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
      require(address(msg.sender) != canteenOwner && address(msg.sender) != admin, "Not Customer");
      _;
  }
  
//customer related
  function order(uint index, uint hostelOrTable, uint number) external payable onlyCustomer {
    orderNumber++;
    canteenOwner.transfer(foods[index].price-foods[index].price*collegeFees/100);
    admin.transfer(foods[index].price-foods[index].price*(100-collegeFees)/100);
    emit ordered(orderNumber-1, index, hostelOrTable, number);
  }

//canteen management related
  function addFood(string memory _name, uint _price, uint _available, string memory _category) public onlyOwner {
    foods[numberOfFoods].name = _name;
    foods[numberOfFoods].price = _price;
    foods[numberOfFoods].available = _available;
    foods[numberOfFoods].category = _category;
    emit addedFood(_name, _price, _available, _category);
    numberOfFoods++;
  }
  
  function availabilityChange(uint index) public onlyOwner {
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
     if(numberOfFoods != 0 && index < numberOfFoods){
        emit deletedItem(foods[index].name);
        delete foods[index];
        numberOfFoods--;
    }
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
