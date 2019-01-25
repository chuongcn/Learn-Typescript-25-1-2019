"use strict";
// Function trong typescript
// Hàm trả về kiểu number
function tinhtong() {
    return 100 + 200;
}
console.log(tinhtong());
// Hàm trả về string
function kieuString() {
    return "ChuongCN";
}
console.log(kieuString());
// Hàm trả về array kiểu string
function demoArrString() {
    return ["ChuongCn", "Thanh", "Caccao"];
}
console.log(demoArrString());
// Hàm trả về array kiểu number
function demoArrNum() {
    return [4, 5, 6, 12, 3, 5];
}
console.log(demoArrNum());
//Hàm trả về array kiểu hỗn tạp -> any: mảng kiểu đối tượng
// function demoArrAny(): any[] {
//   return ["ChuongCN", 16, 2, "DaLat", "Nha Trang", 30, 10];
// }
// console.log(demoArrAny());
function demoDoiTuong() {
    var nhanVatGame = {
        ten: "Micky",
        kinang: {
            kinang1: "tốc độ",
            kinang2: "đổi màu"
        }
    };
    return nhanVatGame;
}
console.log(demoDoiTuong());
//# sourceMappingURL=lesson05.js.map