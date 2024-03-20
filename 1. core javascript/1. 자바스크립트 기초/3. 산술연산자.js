
// js는 정수 나눗셈도 실수 결과값이 나옴
console.log(27 / 5);

// 나머지 연산
console.log(27 % 5);

// 뒤에 숫자가 더 크면 앞의 숫자가 그대로 나머지, 몫은 0
console.log(4 % 10);

console.log(5 % 0); // 나눗셈 불가
console.log(0 % 5); // 몫과 나머지 전부 0

//제곱 연산
console.log(3 ** 4);

console.log('========================');

//증감 연산자
var x = 3;
x++;
++x;
x--;
--x;
console.log(`x:${x}`);


// 전위 연산, 후위 연산
// ++이 변수 앞에오면 = 보다 먼저 연산함
var n1 = 10;
var n2 = n1++;
console.log(`n1:${n1}, n2:${n2}`);

var n3 = 10;
var n4 = ++n3;
console.log(`n3:${n3}, n4:${n4}`);

var xx = 5;
xx++; //연산자가 1개라서 속도가 더 빠름
xx += 1; // xx = xx + 1; 

xx--;

xx -= 1; // xx = xx - 1;

xx *= 3;
xx /= 5; 
xx **= 2;
xx %= 4;
console.log(`xx:${xx}`);
