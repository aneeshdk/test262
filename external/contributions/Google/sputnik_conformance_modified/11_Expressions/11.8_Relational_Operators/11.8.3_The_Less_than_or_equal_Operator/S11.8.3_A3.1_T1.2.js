// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
  * @name: S11.8.3_A3.1_T1.2;
  * @section: 11.8.3;
  * @assertion: Operator x <= y returns ToNumber(x) <= ToNumber(y), if Type(Primitive(x)) is not String or Type(Primitive(y)) is not String;
  * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between primitive number and Number object;
*/

//CHECK#1
if (1 <= 1 !== true) {
  $ERROR('#1: 1 <= 1 === true');
}

//CHECK#2
if (new Number(1) <= 1 !== true) {
  $ERROR('#2: new Number(1) <= 1 === true');
}

//CHECK#3
if (1 <= new Number(1) !== true) {
  $ERROR('#3: 1 <= new Number(1) === true');
}

//CHECK#4
if (new Number(1) <= new Number(1) !== true) {
  $ERROR('#4: new Number(1) <= new Number(1) === true');
}

