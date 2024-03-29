
// 자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator(a){
  return function(n1, n2){
    return n1 + n2;
  }
}

const x = Calculator();
console.log(typeof x);
const y = x(10, 20); 
console.log(`y:${y}`);

console.log('=====================');

const z = Calculator()(6, 9);
console.log(`z: ${z}`);


// 화살표 함수표현식
const operate = () => (n1, n2) => n1 * n2;
const k = operate();
const m = k(3, 7);
console.log(`m: ${m}`);

console.log('======================');

function bar () {

  function fas() {
    return 10;
  }

  return fas;
}

const h = bar()();
// console.log(`h: ${h}`);

// 카운트를 증가시키는 함수
// let count = 0; // 전역변수

// const increase = () => count++;

// console.log(increase());
// console.log(increase());
// count = 999;
// console.log(increase());
// console.log(`count: ${count}`);


// 지역변수는 함수가 끝나면 수명이 끝나서 카운트가 안올라감
// const increase = () => {
//   let count = 0;
//   return ++count;
// };

// increase();
// increase();
// const count = increase();
// console.log(`count: ${count}`);

// 클로저를 통해 지역변수의 스코프를 늘려줄 수 있다.
const increaseClosure = () => {
  let count = 0; // 지역변수

  const helper = () => ++count;

  return helper;
}

const increase = increaseClosure();

console.log(increase());
count = 999;
console.log(increase());
console.log(increase());


// 즉시 실행 함수: 함수를 1회성으로 사용할 목적으로 만드는 함수
// 이름없는 함수에서 전체를 소괄호로 묶고 바로 ()를 써서 호출

(function (){
  console.log('hello');
})();


const increase_ = (() => {
  let count = 0;
  return () => ++count;
})();

increase_();
increase_();
increase_();