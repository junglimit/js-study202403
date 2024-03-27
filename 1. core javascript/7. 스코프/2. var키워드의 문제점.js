
// 1. 변수의 중복선언을 암묵적으로 허용
// var x = 10;
// let x = 10;


// ..... 10만줄 코드

// var x = 'ddd';
// let x = 'ddd'
// console.log(`x: ${x}`);

// 2. 블록 레벨 스코프를 지원하지 않음
let i = '메롱';

for (let i = 0; i < 3; i++){
  console.log(`for - i: ${i}`);
} // for문 종료시 블록레벨 i는 죽음

console.log(`global - i: ${i}`);

// 3. 호이스팅 : 선언위치와 관계없이 참조가능
let hobby;
hobby = '댄스';

// ... 100만줄 코드


console.log(hobby);