
var a = 5;
var b = '5';

console.log(a !== b);


console.log('====================');
// == 비교는 결과 예측이 어려움
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === '0');


// 대소 비교
console.log('====================');
          //97   65
console.log('a'> 'A'); // true

console.log('c' < 'a'); // false

console.log('강' < '황'); // true

console.log('ace' < 'ade'); // true