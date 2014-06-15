var Bee = (function() {

  var beeDefaults = {
    age: 5,
    color: "yellow",
    job: "keep on growing"
  };

  function Bee(){
    Grub.apply(this, arguments);
    extend(this, beeDefaults);
  }

  Bee.prototype = Object.create(Grub.prototype);
  Bee.prototype.constructor = Bee;

  return Bee;

})();

