var HoneyMakerBee = (function() {

  var honeyMakerBeeDefaults = {
    age: 10,
    job: "make honey",
    honeyPot: 0
  };

  function HoneyMakerBee(){
    Bee.apply(this, arguments);
    extend(this, honeyMakerBeeDefaults);
  }

  HoneyMakerBee.prototype = Object.create(Bee.prototype);
  HoneyMakerBee.prototype.constructor = HoneyMakerBee;

  HoneyMakerBee.prototype.makeHoney = function(){
    this.honeyPot += 1;
  };

  HoneyMakerBee.prototype.giveHoney = function(){
    this.honeyPot -= 1;
  };

  return HoneyMakerBee;

})();

