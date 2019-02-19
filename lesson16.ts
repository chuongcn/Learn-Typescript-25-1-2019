// Class là bảng thiết kế của đối tượng
// Abstract là bảng tóm tắt của các class
// Abstract class không được sử dụng để tạo đối tượng - chỉ dùng thiết kế class

abstract class DienThoai {
  //   ten: string;

  public guiTinNhan() {
    console.log("Gửi tin nhắn");
  }
  public goiDienThoai() {
    console.log("Gọi điện thoại");
  }
}

class Android extends DienThoai {}

var samsung = new Android();
samsung.guiTinNhan();
samsung.goiDienThoai();
