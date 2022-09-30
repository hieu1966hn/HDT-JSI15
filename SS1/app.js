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
4. Toán tử logic: && (và và ), || (hoặc hoặc), != (khác)
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
// console.log(
//   4 / 3
// ); //// => 1.3333

// console.log(4 % 3); //// =>  1

// ///// Toán tử so sánh
// console.log(
//   1 == "1"
// );// => true (chỉ so sánh về giá trị)

// console.log(
//   1 === "1"
// );// => False (So sánh cả về giá trị và kiểu dữ liệu)



///// Toán tử logic: 

// &&: Dùng để lọc ra các điều kiện đúng (Nếu như có đk sai => kết quả trả về là: false)
// console.log(
//   4 > 3 && 5 > 4 && 1 < 1
// );

// ||: Dùng để lọc ra các điều kiện sai (Nếu như có đk đúng => kết quả trả về là: true)
// console.log(
//   3 * 4 == 12 || 1 / 2 == 0 || 2 > 10
// );

// != : Dùng đẻ so sánh sự tương đồng
// console.log(
//   1 != '1'
// ); // => false (Do về giá trị 2 KDL trên không khác nhau và đều bằng 1 => )

// console.log(1 !== "1"); //=> true


////// Câu điều kiện:
/*
if(điều kiện){
  /// Chạy code khi điều kiện == true
}
else{
 /// Chạy code khi điều kiện == false
}


Đề bài: Xây dựng chương trình kiểm tra năm nhuận biết
- Năm nhuận là năm chia hết cho 4 và không chia cho 100
- Năm nhuận là năm chia hết cho 400
*/

//// Bài chữa
// let year = Number(prompt("Người dùng nhập vào năm"));
// if (year % 4 == 0 && year % 100 != 0) {
//   console.log(`Năm ${year} là năm nhuận`);
// }
// else if (year % 400 == 0) {
//   console.log(`Năm ${year} là năm nhuận`);
// }
// else {
//   console.log(`Năm ${year} không là năm nhuận`);
// }

///// Vòng lặp: While, do while, For
/*
VD: In ra các số từ 1 -> 10
*/
// let i = 1;
// while (i <= 10) { // => Kiểm tra đk trước rồi lặp
//   console.log(i);// 1, 2, ... ,10
//   i = i + 1; // Sau mỗi lần lặp thì i tăng 1 đơn vị
// }

/// do while: Cho phép chạy lệnh trước => Kiểm tra điều kiện sau
// let i = 1;
// do {
//   console.log(i);
//   i = i + 1;
// }
// while (i <= 10);

/// for

// for (let i = 1; i <= 10; i = i + 1) { // Vòng lặp biết trước số lần lặp
//   console.log(i);
// }


////// Mảng: Array là danh sách các phần tử trong đó các phần tử có thể là bất cứ KDL nào
/// khai báo mảng rỗng
// let animals = ["dog", 'cat', `mouse`, "chicken"];

// //// Nhắc tới mảng => C,R,U,D với mảng

// // C: Creat Thêm phần tử vào trong mảng arr.push();
// animals.push("snake", "monkey");



// /// R: Read duyệt mảng => dùng lệnh console.log()
// console.log(animals);


// /// Update: Đổi snake => fish
// animals[4] = "fish"
// console.log(animals);

// /// Delete: xóa "mouse" (splice)
// animals.splice(2, 1)// xóa 1 phần tử ở vị trí số 2
// console.log(animals);



/*
Đề bài: Xây dưng menu món ăn nhà hàng (array) thỏa mãn điều kiện sau:
1. Người dùng vào trang web sẽ được chọn 1 trong 4 yêu cầu: C,R,U,D
2. C: Hiển thị thông báo cho người dùng nhập vào 1 món ăn mới
3. R: Hiển thị toàn bộ menu món ăn cho người dùng xem
4. U: Hiển thị thông báo cho người dùng nhập vào tên món ăn muốn update => hiển thị thông báo 
cho người dùng nhập vào tên món ăn mới
5. D: Hiển thị thông báo cho người dùng nhập vào tên món ăn muốn xóa => Xóa món ăn đó trong ds

Note: Biết rằng menu ban đầu có 3 món là: 
let menu = ["thịt chó", "gà rang muối", "trâu gác bếp"];

*/

