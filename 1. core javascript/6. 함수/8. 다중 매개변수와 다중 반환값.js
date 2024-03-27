

function add2(n1, n2){
  return n1 + n2;
}
function add3(n1, n2, n3){
  return n1 + n2 + n3;
}

// 만약 n개의 정수 합을 구해주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달한다.

function addAll(numbers){
  var total = 0;
  for (var n of numbers){
    total += n;
  }
  return total;
}

// ES6 - spread문법
// 파라미터에서 스프레드는 한번만 사용 가능, 
// 배열을 두개 넣을땐 직접 대괄호치기
function addAllES6(...numbers){
  console.log(`numbers: ${numbers}`);
  var total = 0;
  for (var n of numbers){
    total += n;
  }
  return total;
}

var r1= addAll([5, 9, 2, 10, 20]);
console.log(`r1: ${r1}`);

var r2 = addAllES6(10, 20, 30, 40, 50);

console.log('============================');

// 다중 반환값
// 함수의 반환값은 언제나 하나다.

// 변수를 재사용 할것이 아니라면 굳이 쓰지말고 리턴값에 직접적으로 사용
// function arithmeticOperate(n1, n2){
//   var subResult = n1 - n2;
//   var multiResult = n1 * n2;
//   var divResult = n1 / n2;
//   return {
//     add : add2(n1, n2), 
//     sub: subResult, 
//     multi: multiResult,
//     div: divResult,
//   };
// }
function arithmeticOperate(n1, n2){

  return {
    add : add2(n1, n2), 
    sub: n1 - n2, 
    multi: n1 * n2,
    div: n1 / n2,
  };
}

var r3 = arithmeticOperate(20, 10);
console.log(`덧셈결과: ${r3.add}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`나눗셈결과: ${r3.div}`);


// return값이 객체이기때문에 .으로 바로 불러올 수 있음
var r4 = arithmeticOperate(5, 3).multi

function foo(){
  return [{id: 'hhh' }, 2, 3];
}

foo()[0].id