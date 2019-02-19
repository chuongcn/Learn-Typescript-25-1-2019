"use strict";
// Abstract Method: là một bản thiết kế cho function
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
var DemoDienThoai = /** @class */ (function () {
    function DemoDienThoai() {
    }
    return DemoDienThoai;
}());
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Iphone.prototype.guiTinNhan = function () {
        return "Gửi tin nhắn trong I sờ phone";
    };
    Iphone.prototype.goiDienThoai = function () {
        console.log("Gọi điện thoại trong Iphone");
    };
    return Iphone;
}(DemoDienThoai));
var iphone = new Iphone();
console.log(iphone.guiTinNhan());
iphone.goiDienThoai();
//# sourceMappingURL=lesson17.js.map