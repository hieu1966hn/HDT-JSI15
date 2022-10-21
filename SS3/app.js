/*
Bài 1:
Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1.6.8.9.0].
Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
*/

// let arr1 = [1, 2, 4, 5, 6];
// let arr2 = [1, 6, 8, 9, 0];

// //// Giới thiệu method includes => trả về true/false khi kiểm tra phần tử đó có trong mảng hay không VD
// console.log(
//   arr1.includes(10)
// ); // => 

// //// Giải bài 1
// console.log(
//   arr1.filter(item => arr2.includes(item))
// );


/*
Bài 02: Sử dụng map() với arr = [1,54,6,7]
để tạo ra một newArr có newArr[i] = arr[i] + 5.

*/
// let arr = [1, 54, 6, 7]
// let newArr = arr.map(item => item + 5)
// console.log(
//   newArr
// );


/*
Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96].
Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7 và in ra mảng mới đó
*/
let m = [1, 2, 4, 5, 6, 7];
let n = [3, 5, 675, 8, 96];

let k = [...m, ...n];
console.log("k: ", k);

console.log(
  k.filter(item => ![1, 8, 10, 96, 7].includes(item))
);