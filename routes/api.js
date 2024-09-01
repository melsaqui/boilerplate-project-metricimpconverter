'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req,res)=>{
    var initNum=convertHandler.getNum(req.query.input);
    var initUnit =convertHandler.getUnit(req.query.input);

    var result = convertHandler.convert(initNum,initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var string = convertHandler.getString(initNum,initUnit,result,returnUnit);
    if (!string.includes("Invalid"))
      res.json({initNum:initNum, initUnit:initUnit, returnNum: result, returnUnit:returnUnit, string:string});
    else res.json(string);
  });
};
