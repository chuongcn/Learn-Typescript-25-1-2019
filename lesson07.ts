// 01-- Anonymous function

// Cách 1: cổ điển
var z = function(x: number, y: string): string {
  return `Chào ${y} năm nay bạn ${x} tuổi có phải ko`;
};

// Cách 2: arow function
var m = (x: number, y: string): string =>
  `Chào ${y} mai là ngày ${x} phải ko bạn? `;

console.log(z(29, "ChuongCN"));
console.log(m(26, "Kim Cương"));

// Arow function tiếp theo
let n = (a: number): number => a + 10;
console.log(n(9));
