"use strict";
// Access modifier
// access:truy cập - modifier: người chỉnh sửa
// public
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var khoahoc = /** @class */ (function () {
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xemkhoahoc = function () {
        console.log(this.ten);
        console.log("ID kh\u00F3a h\u1ECDc l\u00E0: " + this.id + "\n      T\u00EAn kh\u00F3a h\u1ECDc: " + this.ten + "\n      \u0110\u1ED9 d\u00E0i: " + this.dodai);
    };
    return khoahoc;
}());
var khoalaptrinh = /** @class */ (function (_super) {
    __extends(khoalaptrinh, _super);
    function khoalaptrinh(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoalaptrinh.prototype.xemkhoahoc = function () {
        _super.prototype.xemkhoahoc.call(this);
        console.log("FILE đính kèm: " + this.filedinhkem);
    };
    khoalaptrinh.prototype.test1 = function () {
        console.log(this.ten);
    };
    return khoalaptrinh;
}(khoahoc));
var khoahoc1 = new khoahoc(1, "Typescript", 7);
console.log(khoahoc1.ten); // bên ngoài class
console.log(khoahoc1.ten); // bên trong class
// class con
var khoahoc2 = new khoalaptrinh(2, "FrontEnd Master", 13, "abc.zip");
khoahoc2.test1();
//# sourceMappingURL=lesson13.js.map