const FoodOrder = artifacts.require("FoodOrder");
const Library = artifacts.require("Library");
const RentalAgreement = artifacts.require("RentalAgreement");

module.exports = function (deployer) {
  deployer.deploy(FoodOrder);
  deployer.deploy(Library);
  deployer.deploy(RentalAgreement);
};
