
// 값이 일치하는 갯수
// var a = +prompt('정수 A')
// var b = +prompt('정수 B')
// var c = +prompt('정수 C')

// if(a === b && b === c){
//   alert('3개의 값이 전부 같습니다.')
// }else if(a === b || a === c || b == c){
//   alert('2개의 값이 같습니다.')
// }else{
//   alert('3개의 값이 전부 다릅니다.')
// }

// ====================================

// 두값의차이 양수로 구하기
// var a = +prompt('정수 A')
// var b = +prompt('정수 B')

// if(a > b){
//   alert(`두 값의 차이는${a - b}입니다`)
// }else if(a < b){
//   alert(`두 값의 차이는${b - a}입니다`)
// }

// ===================================

// 정수 3개 입력후 최소값 구하기 (음수포함)
// var a = +prompt('정수 A')
// var b = +prompt('정수 B')
// var c = +prompt('정수 C')

// if(a <= b && a <= c){
//   alert(`최소값은 ${a}입니다.`)
// }else if(b <= a && b <= c){
//   alert(`최소값은 ${b}입니다.`)
// }else if(c <= a && c <= b){
//   alert(`최소값은 ${c}입니다.`)
// }

// ========================강사님 풀이====================

// 문제 2 : 두 수의 차이 구하기
/*
var a = +prompt('정수 A');
var b = +prompt('정수 B');

// 두 수의 차이 절대값으로 구하기
var diff = (a > b) ? a - b : b - a;

alert(`두 값의 차이는 ${diff}입니다.`);
*/

// 문제 3 : 3개의 정수 중 최소값 구하기
var a = +prompt('정수 A');
var b = +prompt('정수 B');
var c = +prompt('정수 C');

// min : 최소값을 저장해 놓을 변수
var min = a;                    //  a: 9 ,  b: 77,  c: 99
if (b < min) min = b;           //  min : 9
if (c < min) min = c;

alert(`최소값은 ${min}입니다.`);