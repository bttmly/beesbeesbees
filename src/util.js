var extend = function(target, source){
  Object.keys(source).forEach(function(key){
    target[key] = source[key];
  });
  return target
};