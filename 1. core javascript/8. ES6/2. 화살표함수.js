
// 함수 선언문
// function add (n1, n2){
//   return n1 + n2;
// }

// 함수 표현식
// const add = function(n1, n2){
//   return n1 + n2;
// };

// 화살표 함수
const add = (n1, n2) =>  n1 + n2;

const r1 = add(10, 20);
console.log(`r1: ${r1}`);

// 한줄일때만 생략가능
const sayHello = () => {
  console.log('안녕하세요')
  console.log('수고하세요');
  return;
};


sayHello();

const kim = {
  name: '김철수',
  greeting: sayHello,
  dance: () => console.log('신나게 춤을 춥니다.')
};

kim.dance();
kim.greeting();

// 파라미터 하나면 괄호도 생략 가능,없거나 여러개면 써야함
const pow = n => n ** 2;

console.log(pow(5));


