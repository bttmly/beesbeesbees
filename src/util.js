var extend = function(target, source){
  Object.keys(source).forEach(function(key){
    target[key] = source[key];
  });
  return target
};

var isFunction = function(obj) {
  return obj && Object.prototype.toString.call(obj) === "[object Function]";
};

var getPrototypeChain = function( obj ) {
  var chain;
  chain = [];
  if ( isFunction(obj) ) {
    obj = obj.prototype;
  }
  chain.push( obj );
  while ( obj = Object.getPrototypeOf( obj ) ) {
    chain.push( obj );
  }
  return chain;
};