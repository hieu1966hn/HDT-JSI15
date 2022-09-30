/*
HTML: Ngôn ngữ đánh dấu siêu văn bản => trình bày văn bản/nội dung trên web
CSS: nn trang trí => Cho HTML
Javascript: nn lập trình
=> lý do: Nó có thể làm được rất nhiều tính năng xử lý logic, hoặc thao tác với HTML, CSS

Kiểu dữ liệu cơ bản trong JS:
1. String: Chuỗi
2. Number: Số
3. Object: Đối tượng
4. Boolean: true/false
5. undefinded: Không xác định (let a;)
6. null: Rỗng (Bài toán chủ nhà trọ ....)

Toán tử:
1. Toán tử gán: =
2. Toán tử số học: +,-,*,/,% (chia lấy dư)
3. Toán tử so sánh: >,<,>=, <=, == (So sánh tương đối), === (so sánh tuyệt đối)
4. Toán tử logic: && (và và ), || (hoặc hoặc)
5. Toán tử 3 ngôi:  (điều kiện)?"Câu lệnh 1":"Câu lệnh 2" (Tương đương if else)


Khai báo biến: let, var, const (khai báo hằng số => không thể thay đổi được)
*/


////Kiểu dữ liệu

///// String
// let a = "Hello";
// let b = 'Hello';
// let c = `Hello`;


///// Number
// let a = 123;


///// Boolean:
// let a = true;
// let b = false;


///// Object
// let obj = {
//   name: "Hiếu",
//   age: 24,
// }


//// Undefinded
// let a;
// console.log("a: ", a); /// KDL undefinded


//// null
// let arr = [1, 2, 3, null, 4, 5, 6];
// console.log("arr: ", arr);


////// Toán tử số học: 
console.log(
  4 / 3
); //// => 1.3333

console.log(4 % 3); //// =>  1

///// Toán tử so sánh
console.log(
  1 == "1"
);// => true (chỉ so sánh về giá trị)

console.log(
  1 === "1"
);// => False (So sánh cả về giá trị và kiểu dữ liệu)
