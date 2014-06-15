var extend = function(target, source){
  Object.keys(source).forEach(function(key){
    target[key] = source[key];
  });
  return target
};

var isFunction = function(obj) {
  return obj && Object.prototype.toString.call(obj) === "[object Function]";
};

var getPrototypeChainOf = function( obj ) {
  var chain = [];
  
  if ( isFunction(obj) ) {
    obj = obj.prototype;
  } else {
    obj = obj.constructor.prototype;
  }

  do {
    chain.push( obj );
  } while ( obj = Object.getPrototypeOf( obj ) )

  return chain;
};