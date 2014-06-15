var RetiredForagerBee = (function() {

  var retiredForagerBeeDefaults = {
    age: 40,
    job: "gamble",
    canFly: false,
    color: "grey"
  }

  function RetiredForagerBee(){
    ForagerBee.apply(this, arguments);
    extend(this, retiredForagerBeeDefaults);
  }

  RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
  RetiredForagerBee.prototype.constructor = RetiredForagerBee;

  RetiredForagerBee.prototype.forrage = function(){
    return "I am too old, let me play cards instead";
  };

  RetiredForagerBee.prototype.gamble = function(treasure){
    this.treasureChest.push(treasure);
  };

  return RetiredForagerBee;

})();

