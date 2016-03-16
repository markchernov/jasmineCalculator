var Calculator = require('../calculator.js');

var calculator = new Calculator();

describe("Calculator Tests", function () {

    it("calculator is a valid class", function () {
        //var calculator = new Calculator();
        expect(calculator).toBeTruthy();

    });
    
    it("calculator starts with 0", function () {
        //var calculator = new Calculator();
        expect(calculator.lastResult).toBeFalsy();

    });
    
    it("calculator starts with 0", function () {
        //var calculator = new Calculator();
        expect(calculator.lastResult).toEqual(0);

    });
    
    
      it("calculator starts with 0", function () {
        //var calculator = new Calculator();
        expect(calculator.lastResult).not.toBe(null);

    });
    
    
    
    
    
     it("calculator can add", function() {
      //calculator.add(5);
      expect(calculator.add(7)).toEqual(7);
    });
    
    it("calculator can subtract", function() {
      //calculator.subtract(5);
      expect(calculator.subtract(5)).toEqual(2);
    });
    
    
    it("calculator can multiply", function() {
      //calculator.multiply(5);
      expect(calculator.multiply(7)).toEqual(14);
    });
    
    it("calculator can divide", function() {
      //calculator.divide(5);
      expect(calculator.divide(7)).toEqual(2);
    });
    
    
    it("calculator can clear", function() {
      //calculator.divide(5);
      expect(calculator.clear()).toEqual(0);
    });
    
    
    
    
    
});
