const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
   //assert.isNumber(convertHandler.getNum('1ml'))
   test("Numbers",function(){
    assert.isNumber(convertHandler.getNum('1mi'));
    assert.isNumber(convertHandler.convert('1','mi'));
    assert.isNumber(convertHandler.getNum('mi'));
    assert.isNumber(convertHandler.getNum('0.5mi'));
    assert.isNumber(convertHandler.getNum('1/2km'));

   });
   test('Conversion', function () {
    assert.equal(convertHandler.getNum('1mi'),'1');
    assert.equal(convertHandler.getUnit('1mi'),'mi');
    assert.equal(convertHandler.convert('1','mi'),'1.60934');
   });
});