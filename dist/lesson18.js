"use strict";
// Generic: là cách khai báo hàm nhưng ko cần chỉ ra kiểu dữ liệu của đối số và của chính hàm
function xem(x) {
    return x;
}
function xem2(x) {
    return x;
}
function xem3(x) {
    return x;
}
// console.log(xem2("Hello xem2"));
//01_ Generic bình thường
function xem4(x) {
    return x;
}
console.log(xem4("Đây là hàm Generic kiểu string"));
console.log(xem4(999999));
//02_ Generic trong class
var MayTinh = /** @class */ (function () {
    function MayTinh() {
    }
    MayTinh.xemThongTin = function (x) {
        console.log(x);
    };
    return MayTinh;
}());
MayTinh.xemThongTin(["Dell", "HP", "Lenovo"]);
MayTinh.xemThongTin([10000, "Macbook", "Asus"]);
//03_ Generic trong class
var opDienThoai = /** @class */ (function () {
    function opDienThoai(id, ten, gia, mauSac) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.mauSac = mauSac;
    }
    opDienThoai.prototype.xemThongTin = function () {
        var mauSacOpLung;
        mauSacOpLung = "";
        for (var i = 0; i < this.mauSac.length; i++) {
            mauSacOpLung += this.mauSac[i];
            mauSacOpLung += " | ";
        }
        var thongTin = "ID:" + this.id + " - T\u00EAn \u1ED1p l\u01B0ng l\u00E0:" + this.ten + " - Gi\u00E1:" + this.gia + " - M\u00E0u s\u1EAFc:" + mauSacOpLung;
        console.log(thongTin);
    };
    return opDienThoai;
}());
var oplung1 = new opDienThoai(1, "Ốp Iphone", "100 USD", ["Đen", "Đỏ", "Trắng", "Xanh"]);
oplung1.xemThongTin();
//# sourceMappingURL=lesson18.js.map