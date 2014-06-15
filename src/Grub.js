var Grub = (function() {

  var grubDefaults = {
    age: 0,
    color: "pink",
    food: "jelly"
  };

  function Grub(){
    extend(this, grubDefaults);
  }

  Grub.prototype.eat = function(){

  }

  return Grub;

})();

