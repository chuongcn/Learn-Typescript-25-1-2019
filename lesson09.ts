// Class & Enum
enum state {
  Create = 10,
  Processing,
  Finish
}

class congViec {
  id: number;
  name: string;
  status: state;
  constructor(id: number, name: string, status: state) {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  showThongTin() {
    return `ID: ${this.id} - tên :${this.name} - trạng thái: ${this.status}`;
  }
}

let congViec1 = new congViec(1, "Báo cáo tài chính", state.Finish);
console.log(congViec1.showThongTin());
