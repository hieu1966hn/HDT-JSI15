/*
1. Ôn tập 1 chút về async - await là gì? công dụng?
2. Thực hành 1 vài bài toán liên quan tới (Bất đồng bộ)
3. Thực hành làm bài kiểm tra checkpoint 2 (important!!)
*/


/// async - await là gi?
/*
- async_await: Là tính năng của JS giúp chúng ta làm việc với các hàm
bất đồng bộ theo cách dễ hiểu hơn.
+ async: khai báo 1 hàm bất đồng bộ: async function sum(){
  .... code..
}
^ Khi gọi tới hàm async nó sẽ xử lý mọi thứ và
trả về kết quả trong hàm của nó.

+ await: Tạm dừng việc thực hiện các hàm async cho tới khi kết quả câu lệnh await này được trả về.
*/


////// Lấy ví dụ khác về Async Await
// function getValueA() {
//   return 2
// }
// function getValueB() {
//   return 4
// }
// function getValueC() {
//   return 6
// }

// async function getABC() {
//   let A = await setTimeout(getValueA, 1000)//2
//   // let B = getValueB(getValueB, 2000);//4
//   // let C = getValueC(getValueC, 5000);//6
//   console.log(A);// 2
//   return A; // 2
// }
// getABC()


////// Xử lý bất đồng bộ 
// Code bất đồng bộ
// function taskNo1() {
//   setTimeout(() => {
//     console.log("Task No 1");
//   }, 5000);
// }

// function taskNo2() {
//   setTimeout(() => {
//     console.log("Task No 2");
//   }, 1000);
// }

// taskNo1();
// taskNo2(); // in ra trước
/*
NX:
- Task No 1 sẽ chạy trong 5s
- Task No 2 sẽ chạy trong 1s

=> Nếu chương trình mà chạy đồng bộ như các ngôn ngữ khác:===> thì
Task1 sẽ chạy xong trước Task2


Vậy thì để đồng bộ. Ta làm thế nào?
- C1: Xử lý bất đồng bộ với CallBack
*/

//// Callback (gọi lại hàm)
// function taskNo1(taskNo2) {
//   setTimeout(() => {
//     console.log("Task No 1"); // chạy trước
//     taskNo2();// chạy sau 1s
//   }, 5000);
// }

// function taskNo2() {
//   setTimeout(() => {
//     console.log("Task No 2");
//   }, 1000);
// }
// taskNo1(taskNo2);


/////// C2: Xử lý bất đồng bộ với Promise
/*
Promise: có thể làm cho code của bạn dễ đọc hơn. Một dev mới có thể xem code basevà thấy rõ
thứ tự thực thi của code.
*/

function taskNo1() {
  setTimeout(() => {
    return 1
  }, 5000);
}

function taskNo2() {
  setTimeout(() => {
    return 2;
  }, 1000);
}

//// xử lý bất đồng bộ
const myPromise = new Promise(function (resolve, reject) {
  /// code...
  if (false) {
    resolve("fine");
  }
  else {
    reject("error")
  }
});

myPromise.
  then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })


