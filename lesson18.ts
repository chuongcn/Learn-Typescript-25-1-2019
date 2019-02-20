// Generic: là cách khai báo hàm nhưng ko cần chỉ ra kiểu dữ liệu của đối số và của chính hàm

function xem(x: number): number {
  return x;
}

function xem2(x: string): string {
  return x;
}

function xem3(x: boolean): boolean {
  return x;
}

// console.log(xem2("Hello xem2"));

//01_ Generic bình thường
function xem4<T>(x: T): T {
  return x;
}

console.log(xem4<string>("Đây là hàm Generic kiểu string"));
console.log(xem4<number>(999999));

//02_ Generic trong class

class MayTinh {
  static xemThongTin<T>(x: T[]): void {
    console.log(x);
  }
}

MayTinh.xemThongTin<string>(["Dell", "HP", "Lenovo"]);
MayTinh.xemThongTin<any>([10000, "Macbook", "Asus"]);

//03_ Generic trong class
class opDienThoai<X, Y, Z, H> {
  id: X;
  ten: Y;
  gia: Z;
  mauSac: H[];

  constructor(id: X, ten: Y, gia: Z, mauSac: H[]) {
    this.id = id;
    this.ten = ten;
    this.gia = gia;
    this.mauSac = mauSac;
  }

  xemThongTin() {
    var mauSacOpLung: string;
    mauSacOpLung = "";
    for (var i = 0; i < this.mauSac.length; i++) {
      mauSacOpLung += this.mauSac[i];
      mauSacOpLung += " | ";
    }
    var thongTin = `ID:${this.id} - Tên ốp lưng là:${this.ten} - Giá:${
      this.gia
    } - Màu sắc:${mauSacOpLung}`;
    console.log(thongTin);
  }
}

var oplung1 = new opDienThoai<number, string, string, string>(
  1,
  "Ốp Iphone",
  "100 USD",
  ["Đen", "Đỏ", "Trắng", "Xanh"]
);
oplung1.xemThongTin();
