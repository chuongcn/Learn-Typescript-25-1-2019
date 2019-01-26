// OOP basic
class nhanVatGame {
  tenNhanVat: string;
  slogan: string;
  mau: number;

  // để tạo ra 1 instance
  constructor(tenNhanVat: string, slogan: string, mau: number) {
    this.tenNhanVat = tenNhanVat;
    this.slogan = slogan;
    this.mau = mau;
  }

  chay() {}
  chem() {}
  hienThiThongTin() {
    return `Nhân vật: ${this.tenNhanVat}, slogan: ${
      this.slogan
    } và chỉ số máu là: ${this.mau}`;
  }
}

let nhanVatGame1 = new nhanVatGame("Irelia", "Ý chí của lưỡi kiếm", 697.2);
console.log(nhanVatGame1.hienThiThongTin());

// Ví dụ 2
class dienThoai {
  ten: string;
  gia: number;
  sao: number;
  mausac: string[];

  constructor(ten: string, gia: number, sao: number, mausac: string[]) {
    this.ten = ten;
    this.gia = gia;
    this.sao = sao;
    this.mausac = mausac;
  }

  showThongTin() {
    return `${this.ten} có giá cực hot là: ${this.gia} được đánh giá ${
      this.sao
    } sao và có ${this.mausac.length} màu đó là: ${this.mausac[0]},${
      this.mausac[1]
    },${this.mausac[2]},${this.mausac[3]}`;
  }
}

let dienThoai1 = new dienThoai("Iphone X", 21000000, 5, [
  "Xanh",
  "Đỏ",
  "Tím",
  "Vàng"
]);

console.log(dienThoai1.showThongTin());
