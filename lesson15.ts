// Accessor: get() - set()

// vd: sử dụng mật khẩu với accessor

var matkhau: string = "Liên hệ ChuongCN";
class Nguoi {
  private _ten: string = "";

  public get ten(): string {
    if (matkhau == "Liên hệ ChuongCN") {
      return this._ten;
    } else {
      return "Sai mật khẩu rồi thím ơi!!!!";
    }
  }

  public set ten(v: string) {
    if (matkhau == "Liên hệ ChuongCN") {
      this._ten = v;
    } else {
      this._ten = "Sai mật khẩu rồi!";
    }
  }
}

matkhau = "Liên hệ ChuongCN";
var nguoiso1 = new Nguoi();
nguoiso1.ten = "ChuongCN handsome";

// getter
console.log(nguoiso1.ten);

// setter
// matkhau = "ChuongCN chưa cho số";
console.log(matkhau);
