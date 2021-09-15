const FoodOrder = artifacts.require("FoodOrder");

module.exports = function (deployer) {
  deployer.deploy(FoodOrder);
};
