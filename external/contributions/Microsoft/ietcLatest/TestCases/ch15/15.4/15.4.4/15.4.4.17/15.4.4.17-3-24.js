/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-3-24.js
 * @description Array.prototype.some - value of 'length' is a positive non-integer, ensure truncation occurs in the proper direction
 */


function testcase() {
        function callbackfn1(val, idx, obj) {
            return val > 10;
        }

        function callbackfn2(val, idx, obj) {
            return val > 11;
        }

        var obj = {
            0: 9,
            10: 11,
            11: 12,
            length: 11.5
        };

        return Array.prototype.some.call(obj, callbackfn1) &&
            !Array.prototype.some.call(obj, callbackfn2);
    }
runTestCase(testcase);
