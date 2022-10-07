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
let menu = ["thịt kho tàu", "gà rang muối", "trâu gác bếp"];

///// Yêu cầu đầu tiên: VD trường hợp người dùng nhập sai => Hiển thị lại thông báo nhập lại
let input;
do {
  input = prompt("Mời người dùng nhập vào C,R,U,D").toLocaleLowerCase();// những gì người dùng nhập

  if (input == 'c') {
    // HIện thông báo: Người dùng thêm món ăn
    let newFood = prompt("Mời người dùng thêm món ăn vào menu")
    // console.log(menu.includes(newFood));
    if (!menu.includes(newFood)) {
      menu.push(newFood);
    }
    else {
      alert("Món ăn bạn vừa thêm đã có trong menu rồi")
    }
  }
  else if (input == "r") {
    alert(`Menu món ăn là: ` + menu);
  }
  else if (input == 'u') {
    let foodNeedUpdate = prompt(`Mời người dùng nhập tên món ăn muốn update biết rằng menu: ` + menu)
    //// hàm indexOf chuyên để tìm vị trí phần tử trong mảng
    let viTriFoodNeedUpdate = menu.indexOf(foodNeedUpdate);// 0
    menu[viTriFoodNeedUpdate] = prompt("Mời người dùng nhập tên món ăn mới update");

  }
  else {
    alert("Chưa đúng cú pháp, mời người dùng nhập lại");
  }
}
while (input != 'c' && input != 'r' && input != 'u' && input != 'd');




