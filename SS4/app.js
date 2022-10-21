//// Ôn tập map

const songs = [
  { id: 1, name: "Waiting for you", artist: "Mono" },
  { id: 2, name: "Hay trao cho anh", artist: "Son Tung mtp" },
  { id: 3, name: "the less i know the better", artist: "tame impala a" },
]


//// In ra tên của từng bài hát dưới dạng string
/// output: ["Waiting for you", "Hay trao cho anh","the less i know the better" ]
/*
mảng.join() => String (hay hơn đó là cho phép chèn .. vào giữa từng phần tử mảng)
mảng.toString() => String
*/

//// Giải bài toán 
// console.log(
//   songs.map(item => item.name).join(", ")
// );


///////////////////// Lập trình hướng đối tượng OOP
/*
1. OOP là gì?
2. Ứng dụng của OOP trong lập trình là gì?
3. Có mấy tính chất của OOP?

- 1: Lập trình hướng đối tượng. Tập chung vào các đối tượng thao tác hơn là logic
- 2: Tối ưu quản lý code, tăng khả năng tái sử dụng code => tóm gọn các thủ tục
- 3: có 4 tính chất
+ Đóng gói
+ Trừu tượng
+ Kế thừa
+ Đa hình
*/



//// Thực hành về OOP: Khái niệm classes: => Giống như là đang lập trình (tạo ra) 1 loài mới || 1 kiểu dữ liệu mới
//// Khai báo 1 class NGUOi
// class Nguoi {

//   /// Định nghĩa phương thức (hàm) 
//   walk() {
//     alert("Tôi đang đi bộ đấy")
//   }
// }

// //// Làm thế nào để khai báo biến có kiểu dữ liệu là Nguoi
// let PhucHien = new Nguoi();
// console.log("PhucHien: ", PhucHien);




/////// Thuộc tính của classs
// class Nguoi {
//   /// Định nghĩa thuộc tính: từ khóa constructor
//   constructor(_name, _age, _address, _hobby) {
//     this.name = _name;
//     this.age = _age;
//     this.address = _address
//     this.hobby = _hobby
//   }


//   /// Định nghĩa phương thức (hàm) 
//   walk() {
//     alert("Tôi đang đi bộ đấy")
//   }
// }

// //// Làm thế nào để khai báo biến có kiểu dữ liệu là Nguoi
// let PhucHien = new Nguoi("Phạm Phúc Hiển", 15, "Lâm Đồng", "Cầu Lông");
// console.log("PhucHien: ", PhucHien.address);


///// Tính kế thừa 
class Person {
  // Thuộc tính nhận vào gồm:
  constructor(_name, _age, _address) {
    /// Gán giá trị cho thuộc tính của class
    this.name = _name;
    this.age = _age;
    this.address = _address
  }

  say() {
    return `I am a Person and my name is ${this.name}`
  }
}

//// Khai báo 1 class Student kế thừa từ class Person
// class Student extends Person {
//   constructor(_name, _age, _address, _class, _idStudent) {
//     /// từ khóa kế thừa thuộc tính: super();
//     super(_name, _age, _address);
//     this.class = _class;
//     this.idStudent = _idStudent
//   }

//   //// Kế thừa phương thức
//   say() {
//     super.say(); // Kế thừa phương thức
//     return super.say() + ` and I am learning code from MindX School at ${this.address}`
//   }
// }


// let Hieu = new Student("Nguyễn Trung Hiếu", 18, "Hà Nội", "12a1", "001100110");
// console.log(Hieu);
// console.log(Hieu.say());



/*
Bài 1: Khởi tạo kiểu dữ liệu hình tròn.
Biết rằng hình tròn có thuộc tính: bánh kính hình tròn
Yêu cầu: Xây dựng Phương thức trong KDL hình tròn như sau:
+ Tính diện tích hình tròn
+ Tính chu vi hình tròn 


Bài 2: Khởi tạo KDL hình chữ nhật
Biết rằng hình chữ nhật có thuộc tính truyền vào là: chiều dài, chiều rộng
Yêu cầu: Xây dựng phương thức
+ Tính chu vi hình chữ nhật
+ Tính diện tích hình chữ nhật
*/

/// CHỮA BÀI 1
class HinhTron {
  constructor(bkht) {
    this.bkht = bkht

  }

  dtht() {
    return 3.14 * this.bkht * this.bkht
  }

  cvht() {
    return 2 * 3.14 * this.bkht
  }
}

let HinhTron1 = new HinhTron(5)
console.log(HinhTron1.dtht());


