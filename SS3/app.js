/*
Bài 1: 
Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1.6.8.9.0]. 
Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
*/

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [1, 6, 8, 9, 0];

//// Giới thiệu method includes => trả về true/false khi kiểm tra phần tử đó có trong mảng hay không VD
console.log(
  arr1.includes(10)
); // => 

//// Giải bài 1
console.log(
  arr1.filter(item => arr2.includes(item))
);