"use strict";
// OOP - Tìm hiểu static
/*
  static giúp ta sử dụng thuộc tính,phương thức của 1 class mà ko cần tạo instance mới
 */
var state;
(function (state) {
    state[state["create"] = 10] = "create";
    state[state["processing"] = 11] = "processing";
    state[state["finish"] = 12] = "finish";
})(state || (state = {}));
var clscongViec = /** @class */ (function () {
    function clscongViec(id, name, status) {
        this.id = 1;
        this.id = id;
        this.name = name;
        this.status = status;
    }
    clscongViec.prototype.showThongTinCV = function () {
        return "ID: " + this.id + " - T\u00EAn: " + this.name + " - Tr\u1EA1ng th\u00E1i: " + this.status;
    };
    clscongViec.name = "công việc 1";
    return clscongViec;
}());
// tạo 1 đối tượng từ class (instance)
var cv1 = new clscongViec(1, "Học Typescript", state.finish);
// console.log(cv1.showThongTinCV());
// console.log(cv1.name);
// static giúp ta ko cần phải khởi tạo instance mà vẫn có thể sử dụng được các property & method
console.log(clscongViec.name);
//# sourceMappingURL=lesson10.js.map