// 재할당 가능
let x;
x = 'zz';
console.log(x);

// const: 상수 선언
const y = '메롱';
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = '#0f0'
/*
  $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변성을 유지할 수 있다.
const kim = {
  name: '김철수',
  age: 30
};
kim.age = 31;
kim.name = '마이클 킴'

// kim = {
//   name: '김철수',
//   age: 30
// }

// 배열도 객체임
const array = {
  0: 'z',
  1: 'dd',
  2: 'ddf',
  length: 3
}
// 변수선언때 일단 const쓰고 재할당이 필요할때 let으로 바꿈
const userName = 'zz'