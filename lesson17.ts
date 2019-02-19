// Abstract Method: là một bản thiết kế cho function

abstract class DemoDienThoai {
  abstract guiTinNhan(): string;

  abstract goiDienThoai(): void;
}

class Iphone extends DemoDienThoai {
  guiTinNhan() {
    return "Gửi tin nhắn trong I sờ phone";
  }
  goiDienThoai() {
    console.log("Gọi điện thoại trong Iphone");
  }
}

var iphone = new Iphone();
console.log(iphone.guiTinNhan());

iphone.goiDienThoai();
