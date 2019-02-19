"use strict";
// Class là bảng thiết kế của đối tượng
// Abstract là bảng tóm tắt của các class
// Abstract class không được sử dụng để tạo đối tượng - chỉ dùng thiết kế class
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
var DienThoai = /** @class */ (function () {
    function DienThoai() {
    }
    //   ten: string;
    DienThoai.prototype.guiTinNhan = function () {
        console.log("Gửi tin nhắn");
    };
    DienThoai.prototype.goiDienThoai = function () {
        console.log("Gọi điện thoại");
    };
    return DienThoai;
}());
var Android = /** @class */ (function (_super) {
    __extends(Android, _super);
    function Android() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Android;
}(DienThoai));
var samsung = new Android();
samsung.guiTinNhan();
samsung.goiDienThoai();
//# sourceMappingURL=lesson16.js.map