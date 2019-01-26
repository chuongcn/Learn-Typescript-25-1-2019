"use strict";
// OOP basic
var nhanVatGame = /** @class */ (function () {
    // để tạo ra 1 instance
    function nhanVatGame(tenNhanVat, slogan, mau) {
        this.tenNhanVat = tenNhanVat;
        this.slogan = slogan;
        this.mau = mau;
    }
    nhanVatGame.prototype.chay = function () { };
    nhanVatGame.prototype.chem = function () { };
    nhanVatGame.prototype.hienThiThongTin = function () {
        return "Nh\u00E2n v\u1EADt: " + this.tenNhanVat + ", slogan: " + this.slogan + " v\u00E0 ch\u1EC9 s\u1ED1 m\u00E1u l\u00E0: " + this.mau;
    };
    return nhanVatGame;
}());
var nhanVatGame1 = new nhanVatGame("Irelia", "Ý chí của lưỡi kiếm", 697.2);
console.log(nhanVatGame1.hienThiThongTin());
// Ví dụ 2
var dienThoai = /** @class */ (function () {
    function dienThoai(ten, gia, sao, mausac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mausac = mausac;
    }
    dienThoai.prototype.showThongTin = function () {
        return this.ten + " c\u00F3 gi\u00E1 c\u1EF1c hot l\u00E0: " + this.gia + " \u0111\u01B0\u1EE3c \u0111\u00E1nh gi\u00E1 " + this.sao + " sao v\u00E0 c\u00F3 " + this.mausac.length + " m\u00E0u \u0111\u00F3 l\u00E0: " + this.mausac[0] + "," + this.mausac[1] + "," + this.mausac[2] + "," + this.mausac[3];
    };
    return dienThoai;
}());
var dienThoai1 = new dienThoai("Iphone X", 21000000, 5, [
    "Xanh",
    "Đỏ",
    "Tím",
    "Vàng"
]);
console.log(dienThoai1.showThongTin());
//# sourceMappingURL=lesson08.js.map