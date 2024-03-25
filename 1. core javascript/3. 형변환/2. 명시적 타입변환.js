

var x= '30.5', y = '40.5';

var result = Number(x) + Number(y);
// parseInt는 문자를 숫자로 바꿀때 정수로 바꿈
// parseDouble을 쓰면 소수점도 옴
var result2 = parseInt(x) + parseInt(y);
var result3 = +x + +y;
console.log(result);
console.log(result2);
console.log(result3);

console.log('================');

// 문자로 바꾸기
var m = ''+ 10 + 20;
console.log(m);

var f = ''+false;

console.log('================');

// 논리로 바꾸기
console.log(Boolean('hello'));
console.log(Boolean(null));
// 앞에 느낌표 두개를 붙이면 논리연산자로 바꿀 수 있음
console.log(!!999);
console.log(!!undefined);

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
