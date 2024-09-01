function ConvertHandler() {
  
  this.getNum = function(input) {
    input = String(input);  //make sure string
    let result='';
    var i;
    if (input[0]<'0' || input [i]>'9')
      return result;
    for (i=0; i<input.length;i++){
        if ((input[i]>='0' && input [i]<='9') || (input [i]=='.')|| (input[i]=='/')){
            result+=input[i];
        }
    }
    if (result == ''){
      if (this.getUnit !=''){
        result = '1'
      }
    }
    else if(result.includes('/')){
      result = result.split("/");
      if (result.length==2)
        result = parseFloat(result[0])/parseFloat(result[1]);
      else 
        result = ''
    }
        //console.log(result);

    return parseFloat(result);
  };
  
  this.getUnit = function(input) {
    input = String(input);  //make sure string
    let result='';
    let resultTemp =''
    const validUnits = ['kg','km','mi','gal','L','lbs'];
    var i;
    for (i=0; i<input.length;i++){
        if ((input[i]>='a' && input [i]<='z')){
            resultTemp+=input[i];
        }
        else if ((input[i]>='A' && input [i]<='Z')){
          resultTemp+=input[i];
      }
    }
    var j;
    for (j=0;j<validUnits.length;j++){
      if(resultTemp==validUnits[j]){
        result= resultTemp;
        break;
      }
      else if (resultTemp.toLowerCase()==validUnits[j]){
        result = resultTemp.toLowerCase();
        break;
      }
      else if(resultTemp.toUpperCase()=='L'){
        result = resultTemp.toUpperCase();
        break;
      }

    }
    //console.log(result);
    return result;
    
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if (initUnit.toLowerCase() == 'gal'){
      result = "L"; 
    }
    else if(initUnit.toLowerCase() == 'lbs'){
      result = "kg"; 
    }
    else if(initUnit.toLowerCase() == 'mi'){
      result = "km"; 
    }
    else if(initUnit == 'L'){
      result ="gal"; 
    }
    else if(initUnit.toLowerCase() == 'kg'){
      result ="lbs";
    }
    else if(initUnit.toLowerCase()== 'km'){
      result ="mi"; 
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    unit = String(unit);
    let result;
    if (unit.toLowerCase() == 'gal'){
      result = "gallons"; 
    }
    else if(unit.toLowerCase() == 'lbs'){
      result = "pounds"; 
    }
    else if(unit.toLowerCase() == 'mi'){
      result = "miles"; 
    }
    else if(unit == 'L'){
      result = "liters"; 
    }
    else if(unit.toLowerCase() == 'kg'){
      result ="kilograms";
    }
    else if(unit.toLowerCase()== 'km'){
      result ="kilometers"; 
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result ;
    initNum=parseFloat(initNum);
    initUnit = String(initUnit);
    if (initUnit.toLowerCase() == 'gal'){
      result = initNum *galToL; 
    }
    else if(initUnit.toLowerCase() == 'lbs'){
      result = initNum *lbsToKg; 
    }
    else if(initUnit.toLowerCase() == 'mi'){
      result = initNum *miToKm; 
    }
    else if(initUnit.toUpperCase() == 'L'){
      result =initNum/galToL; 
    }
    else if(initUnit.toLowerCase() == 'kg'){
      result =initNum/lbsToKg;
    }
    else if(initUnit.toLowerCase()== 'km'){
      result =initNum/miToKm; 
    }

    if (result!=undefined)
      result=parseFloat(result.toFixed(5));
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    //'3.1 miles converts to 4.98895 kilometers'
    if(String(initNum)=='' && initUnit==''){
      result= "invalid number and unit"
    }
    else if(String(initNum)==''){
      result= "invalid number"
    }
    else if(initUnit==''){
      result= "invalid unit"
    }
    else
      result = String(initNum) +" "+ this.spellOutUnit(initUnit)+ " converts to "+ returnNum + " " +this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
