///////// Kiến thức mới

// let obj = {
//   name: "John",
//   age: 24,
//   address: '22 Jump Street'
// }

//// Sao chép đối tượng obj này vào 1 biến có tên là obj2;
// let obj2 = obj;
// console.log("obj2: ", obj2);

/// THAY ĐỔI name "john" => "Hiển"
// obj2.name = "Hiển"
// console.log(obj2);
// console.log(obj);
/*
Lý do vì sao Oj2 lại giống hệt obj vì: 

Bài toán ngôi nhà: Ví dụ:
Ngôi nhà A có 1000m2 đất do Bầu Đỗ Hiển sở hữu (=> Hiển đứng tên)
Có 1 người nữa tên là "Hiếu" đứng tên chung với Hiển sở hữu ngôi nhà

=> Khi giá trị bên trong ngôi nhà thay đổi => ....
=> Sao chép đối tượng hoặc là mảng => thì chúng ta sử dụng cú pháp đặc trưng hoặc các hàm sao cho kết quả trả về là 1 mảng/object mới hoàn toàn

*/



let obj = {
  name: "John",
  age: 24,
  address: '22 Jump Street'
}


////  Sao chép đối tượng obj này vào 1 biến có tên là obj2
let obj2 = { ...obj }
console.log("obj2: ", obj2);