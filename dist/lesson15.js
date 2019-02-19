"use strict";
// Accessor: get() - set()
// vd: sử dụng mật khẩu với accessor
var matkhau = "Liên hệ ChuongCN";
var Nguoi = /** @class */ (function () {
    function Nguoi() {
        this._ten = "";
    }
    Object.defineProperty(Nguoi.prototype, "ten", {
        get: function () {
            if (matkhau == "Liên hệ ChuongCN") {
                return this._ten;
            }
            else {
                return "Sai mật khẩu rồi thím ơi!!!!";
            }
        },
        set: function (v) {
            if (matkhau == "Liên hệ ChuongCN") {
                this._ten = v;
            }
            else {
                this._ten = "Sai mật khẩu rồi!";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Nguoi;
}());
matkhau = "Liên hệ ChuongCN";
var nguoiso1 = new Nguoi();
nguoiso1.ten = "ChuongCN handsome";
// getter
console.log(nguoiso1.ten);
// setter
// matkhau = "ChuongCN chưa cho số";
console.log(matkhau);
//# sourceMappingURL=lesson15.js.map