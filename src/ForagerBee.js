var ForagerBee = (function() {

  var foragerBeeDefaults = {
    age: 10,
    job: "find pollen",
    canFly: true
  };

  function ForagerBee(){
    Bee.apply(this, arguments);
    extend(this, foragerBeeDefaults);
    this.treasureChest = [];
  }

  ForagerBee.prototype = Object.create(Bee.prototype);
  ForagerBee.prototype.constructor = ForagerBee;

  ForagerBee.prototype.forage = function(treasure){
    this.treasureChest.push(treasure);
  };

  ForagerBee.prototype.forrage = ForagerBee.prototype.forage;

  return ForagerBee;

})();

