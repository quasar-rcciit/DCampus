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
  }

  mapping(uint => FoodItem) public foods;

//all events
  event ordered(uint orderNumber, uint hostelOrTable, uint number);
  event deletedItem(string _name);
  event availabilityChanged(string _name, uint _available);
  event addedFood(string _name, uint _price, uint _available);
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
  function order(string calldata _name, uint hostelOrTable, uint number) external payable onlyCustomer {
    uint i = 0;
    uint index = numberOfFoods+1;
    for (i = 0; i < numberOfFoods; i++){
      if (keccak256(abi.encodePacked(foods[i].name)) == keccak256(abi.encodePacked(_name))){
          index = i;
          break;
      }
    }
    if (index != numberOfFoods+1){
        emit ordered(orderNumber, hostelOrTable, number);
        orderNumber++;
        canteenOwner.transfer(foods[index].price-foods[index].price*collegeFees/100);
        admin.transfer(foods[index].price-foods[index].price*(100-collegeFees)/100);
    }
    else{
        msg.sender.transfer(msg.value);
    }
  }

//canteen management related
  function addFood(string memory _name, uint _price, uint _available) public onlyOwner {
    foods[numberOfFoods].name = _name;
    foods[numberOfFoods].price = _price;
    foods[numberOfFoods].available = _available;
    emit addedFood(_name, _price, _available);
    numberOfFoods++;
  }
  
  function availabilityChange(string memory _name, uint _available) public onlyOwner {
    uint i = 0;
    for (i = 0; i < numberOfFoods; i++){
      if (keccak256(abi.encodePacked(foods[i].name)) == keccak256(abi.encodePacked(_name))){
        foods[i].available = _available;
        emit availabilityChanged (_name, _available);
        break;
      }
    }
  }

  function deleteItem(uint index) public onlyOwner {
    if(numberOfFoods!=0){
        emit deletedItem(foods[index].name);
        foods[index] = foods[numberOfFoods-1];
        numberOfFoods--;
    }
  }

  function returnPrice(uint index) public view returns(uint){
      return foods[index].price;
  }
  
//ownership can be changed only by college authorities
  function changeOwner(address payable _canteenOwner) public onlyOwner {
      emit changedCanteenOwner(canteenOwner, _canteenOwner);
      canteenOwner = _canteenOwner;
  }

//college commission can be changed only by authorities
  function changeFees(uint _collegeFees) public onlyAdmin {
    collegeFees = _collegeFees;
    emit changedCollegeFees(_collegeFees);
  }

}
