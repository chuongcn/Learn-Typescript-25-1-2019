"use strict";
// 01-- Anonymous function
// Cách 1: cổ điển
var z = function (x, y) {
    return "Ch\u00E0o " + y + " n\u0103m nay b\u1EA1n " + x + " tu\u1ED5i c\u00F3 ph\u1EA3i ko";
};
// Cách 2: arow function
var m = function (x, y) {
    return "Ch\u00E0o " + y + " mai l\u00E0 ng\u00E0y " + x + " ph\u1EA3i ko b\u1EA1n? ";
};
console.log(z(29, "ChuongCN"));
console.log(m(26, "Kim Cương"));
// Arow function tiếp theo
var n = function (a) { return a + 10; };
console.log(n(9));
//# sourceMappingURL=lesson07.js.map