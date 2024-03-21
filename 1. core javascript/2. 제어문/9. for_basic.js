/*

while문과 for문 의 차이점
1, 가독성 차이
2, 반복이 끝나는 부분이 정해져 있는지에 따라 달라짐

*/


// 실행순서 : 1 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4 -> 2
var i = 1;   // 1. begin
while (i <= 5){     // 2. end
  console.log('하이'); // 3. execute
  i++     //4. step
}

// 증감식은 맨 마지막에 실행
for(var i = 1; i <= 5; i++){
  console.log('하이');
}

// 1 ~ 10 누적합
var total = 0;
for(var i = 1; i <= 10; i++){
  total += i;
}
console.log(total);

// 횟수 지정 반복문
for (var i = 0; i < 5; i++){
  console.log('메롱');
}