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
// let newArr = []
// //// Cách 1; Duyệt mảng với vòng lặp for
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2)  // 2, 4, ... 20
// }
// console.log(newArr);


//// Cách 2: Duyệt mảng + thực hành điều kiện với map => kết quả trả về của map là 1 mảng mới
// let newArr = arr.map(item => item * 2); // 2,4, .....,20
// console.log("newArr: ", newArr);


///// In ra mảng có phần tử bên trong nhỏ hơn phần tử mảng arr ban đầu 1 giá trị là 5
// let newArr5 = arr.map(x => x - 5);// (x) => {return x-5} || x => x - 5
// console.log("newArr5: ", newArr5);




////// Lấy ra các phần tử nhỏ hơn 5 ra 1 mảng mới  và in ra trên màn hình console (Filter)
let newArr = arr.filter(item => item < 5);
console.log("newArr: ", newArr);


/*
KL
- map: Dùng để thực thi câu lệnh với từng phần tử mảng
- filter: Dùng để lọc/lấy ra phần tử mảng thỏa mãn điều kiện đặt ra
- indexOf: Dùng để trả về vị trí phần tử mảng muốn tìm
- Find: Dùng để trả về giá trị phần tử muốn tìm trong mảng
*/

let animals = [
  {
    name: "Cat",
    size: "small",
    weight: 5
  },
  {
    name: "dog",
    size: "small",
    weight: 10
  },
  {
    name: "pig",
    size: "big",
    weight: 200
  },
]
/*
Bài toán: 
1. In ra tên từng con vật trong mảng animals
2. Lấy ra con vật nào có cân nặng < 100
3. Lọc/lấy ra con vật nào có cân nặng nhỏ và in ra tên con vật đó.
*/

