// Access modifier
// access:truy cập - modifier: người chỉnh sửa
// public

class khoahoc {
  public id: number;
  public ten: string;
  public dodai: number;

  constructor(id: number, ten: string, dodai: number) {
    this.id = id;
    this.ten = ten;
    this.dodai = dodai;
  }

  xemkhoahoc() {
    console.log(this.ten);

    console.log(`ID khóa học là: ${this.id}
      Tên khóa học: ${this.ten}
      Độ dài: ${this.dodai}`);
  }
}

class khoalaptrinh extends khoahoc {
  filedinhkem: string;

  constructor(id: number, ten: string, dodai: number, filedinhkem: string) {
    super(id, ten, dodai);
    this.filedinhkem = filedinhkem;
  }

  xemkhoahoc() {
    super.xemkhoahoc();
    console.log("FILE đính kèm: " + this.filedinhkem);
  }
  test1() {
    console.log(this.ten);
  }
}

var khoahoc1 = new khoahoc(1, "Typescript", 7);
console.log(khoahoc1.ten); // bên ngoài class

console.log(khoahoc1.ten); // bên trong class

// class con
var khoahoc2 = new khoalaptrinh(2, "FrontEnd Master", 13, "abc.zip");
khoahoc2.test1();
