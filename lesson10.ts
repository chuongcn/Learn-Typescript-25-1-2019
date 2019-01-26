// OOP - Tìm hiểu static
/*
  static giúp ta sử dụng thuộc tính,phương thức của 1 class mà ko cần tạo instance mới
 */

enum state {
  create = 10,
  processing,
  finish
}

class clscongViec {
  id: number = 1;
  static name: string = "công việc 1";
  status: state;

  constructor(id: number, name: string, status: state) {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  showThongTinCV() {
    return `ID: ${this.id} - Tên: ${this.name} - Trạng thái: ${this.status}`;
  }
}

// tạo 1 đối tượng từ class (instance)
let cv1 = new clscongViec(1, "Học Typescript", state.finish);

// console.log(cv1.showThongTinCV());
// console.log(cv1.name);

// static giúp ta ko cần phải khởi tạo instance mà vẫn có thể sử dụng được các property & method
console.log(clscongViec.name);
