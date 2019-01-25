// Kiểu any là hỗn tạp - trộn lẫn
// void là ko cho return - ko có dữ liệu trả về

// Ép kiểu trong typescript
// Cách 1: <>
// Cách 2: as

let kieu1: any;
kieu1 = "Đây là ép kiểu trong ts";
console.log((<string>kieu1).length);

console.log((kieu1 as string).length);

let text: string;
text = "100";
// console.log((text as number) + 60);
