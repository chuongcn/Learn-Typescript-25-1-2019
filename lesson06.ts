// Vì sao phải dùng function
// Hàm là một nhóm các dòng code được đặt một cái tên để dễ quản lý

var a: number;
var b: number;
var tbc: number;
a = 2;
b = 10;
tbc = (a + b) / 2;
console.log("Trung bình cộng 2 số: " + tbc);

function tinhTBC(x: number, y: number): number {
  return (x + y) / 2;
}

console.log(tinhTBC(4, 6));
