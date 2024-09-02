const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
   test("Whole Number",function(){
      assert.isNumber(convertHandler.getNum('1mi'));
      assert.isNumber(convertHandler.getNum('100'));
      assert.equal(convertHandler.getNum('1mi'),'1');
      assert.equal(convertHandler.getNum('1000km'),'1000');

   });
   test("Decimal Numbers",function(){
      assert.isNumber(convertHandler.getNum('0.5mi'));
      assert.equal(convertHandler.getNum('0.5mi'),0.5)
      assert.isNumber(convertHandler.getNum('5.7km'));
      assert.equal(convertHandler.getNum('5.7km'),5.7)
      assert.isNumber(convertHandler.getNum('100.5lbs'));
      assert.equal(convertHandler.getNum('100.5lbs'),100.5)
      assert.isNumber(convertHandler.getNum('55.5'));
      assert.equal(convertHandler.getNum('55.5'),55.5)


   });
   test("Fraction",function(){
      assert.isNumber(convertHandler.getNum('1/2km'));
      assert.equal(convertHandler.getNum('1/2km'),0.5);
      assert.equal(convertHandler.getNum('1/4'),0.25);


   });
   test("Fraction with Decimal",function(){
      assert.isNumber(convertHandler.getNum('0.5/2km'));
      assert.equal(convertHandler.getNum('0.5/2km'),0.25);
      assert.isNumber(convertHandler.getNum('0.25/5'));
      assert.equal(convertHandler.getNum('0.25/5'),0.05);


   });
   test("Double Fraction",function(){
      assert.isEmpty(convertHandler.getNum('1/2/2km'))
   });
   test("No Numeric Input",function(){
      assert.isNumber(convertHandler.getNum('mi'));
      assert.isNumber(convertHandler.getNum('gal'));
      assert.isNumber(convertHandler.getNum('l'));
      assert.isNumber(convertHandler.getNum('km'));
      assert.isNumber(convertHandler.getNum('lbs'));
      assert.isNumber(convertHandler.getNum('kg'));
      assert.equal(convertHandler.getNum('L'),1);

   });
   test("Valid Unit",function(){
      assert.equal(convertHandler.getUnit('50lbs'),'lbs');
      assert.equal(convertHandler.getUnit('3mi'),'mi');
      assert.equal(convertHandler.getUnit('100 gal'),'gal');
      assert.equal(convertHandler.getUnit('6 kg'),'kg');
      assert.equal(convertHandler.getUnit('5l'),'L');
      assert.equal(convertHandler.getUnit('KM'),'km');
   });
   test("Invalid Unit",function(){
      assert.isEmpty(convertHandler.getUnit('5'));
      assert.isEmpty(convertHandler.getUnit('10ml'));
      assert.isEmpty(convertHandler.getUnit("6yo"));

   });
   test("Return Unit",function(){
      assert.equal(convertHandler.getReturnUnit('lbs'),'kg');
      assert.equal(convertHandler.getReturnUnit('mi'),'km');
      assert.equal(convertHandler.getReturnUnit('gal'),'L');
      assert.equal(convertHandler.getReturnUnit('kg'),'lbs');
      assert.equal(convertHandler.getReturnUnit('KM'),'mi');
      assert.equal(convertHandler.getReturnUnit('L'),'gal');

   });
   test("Spelled Out",function(){
      assert.equal(convertHandler.spellOutUnit('lbs'),'pounds');
      assert.equal(convertHandler.spellOutUnit('mi'),'miles');
      assert.equal(convertHandler.spellOutUnit('gal'),'gallons');
      assert.equal(convertHandler.spellOutUnit('kg'),'kilograms');
      assert.equal(convertHandler.spellOutUnit('KM'),'kilometers');
      assert.equal(convertHandler.spellOutUnit('L'),'liters');
   });
   suite('Conversions', function(){
      test('gal to L', function () {
         assert.equal(convertHandler.convert('100','gal'),'378.54100');
      });
      test('L to gal',function(){
         assert.equal(convertHandler.convert('5','L'),'1.32086');
      });
      test('mi to km', function () {
         assert.equal(convertHandler.convert('1','mi'),'1.60934');
      });
      test('km to mi', function () {
         assert.equal(convertHandler.convert('2','km'),'1.24275');
      });
      test('lbs to kg',function(){
         assert.equal(convertHandler.convert('200','lbs'),'90.71840');
      });
      test('kg to lbs',function(){
         assert.equal(convertHandler.convert('50','kg'),'110.23122');

      });

   })
   
});