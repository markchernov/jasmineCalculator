
module.exports = Calculator;

function Calculator() {


var lastResult = 0;


this.add = function(number) {
    
    
    lastResult = lastResult + number;
    return this.getLastResult()
    
};

this.subtract = function(number) {
    
    lastResult = lastResult - number;
    return this.getLastResult()
};

this.multiply = function(number) {
    
    lastResult = lastResult * number;
    return this.getLastResult()
};

this.divide = function(number) {
    
    lastResult = lastResult/number;
    return this.getLastResult()
};

this.clear = function() {
    
    lastResult = 0;
    return this.getLastResult()
    
}
    
  this.getLastResult = function() {
      
      
      return lastResult
      
      
  }  
    
    
    
    
    
    
}

