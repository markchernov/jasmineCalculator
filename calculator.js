
module.exports = Calculator;

function Calculator() {


this.lastResult = 0;


this.add = function(number) {
    
    
    this.lastResult = this.lastResult + number;
    return this.lastResult
    
};

this.subtract = function(number) {
    
    this.lastResult = this.lastResult - number;
    return this.lastResult
};

this.multiply = function(number) {
    
    this.lastResult = this.lastResult * number;
    return this.lastResult
};

this.divide = function(number) {
    
    this.lastResult = this.lastResult/number;
    return this.lastResult
};

this.clear = function() {
    
    this.lastResult = 0;
    return this.lastResult
}}

