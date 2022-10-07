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



// let obj = {
//   name: "John",
//   age: 24,
//   address: '22 Jump Street'
// }


// ////  Sao chép đối tượng obj này vào 1 biến có tên là obj2
// let obj2 = { ...obj }
// console.log("obj2: ", obj2);


//// khai báo 1 biến mới và biến này là gộp toàn bộ giá trị của 2 đối tượng khác 
//// => Điểm chung của những đối tượng đó và các khóa mới .
// let obj1 = {
//   name: "Hiếu",
//   age: 24
// }

// let obj2 = {
//   name: "John Wick",
//   age: 50,
//   address: "US"
// }


// let obj3 = Object.assign(obj1, obj2); // {name: "John Wick", age: 50, address}
// console.log("obj3: ", obj3);


////////// Map, Filter, find, IndexOf, Includes, .... => áp dụng cho mảng

/*
Bài toán đặt ra: cho 1 mảng ban đầu: 
Yêu cầu: 
- In ra mảng mới có phần tử bên trong gấp đôi phần tử mảng ban đầu
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]/// => 2,4,6,... 20
//// Cách 1; Duyệt mảng với vòng lặp for
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] * 2 // 2, 4, ... 20
}

console.log(arr);