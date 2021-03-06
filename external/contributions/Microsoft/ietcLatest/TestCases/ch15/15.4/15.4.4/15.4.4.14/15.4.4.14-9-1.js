/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-1.js
 * @description Array.prototype.indexOf must return correct index (boolean)
 */


function testcase() {
  var obj = {toString:function (){return true}};
  var _false = false;
  var a = [obj,"true", undefined,0,_false,null,1,"str",0,1,true,false,true,false];
  if (a.indexOf(true) === 10 &&  //a[10]=true
      a.indexOf(false) === 4)    //a[4] =_false
  {
    return true;
  }
 }
runTestCase(testcase);
