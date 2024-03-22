// 무한루프 코드에 if/break 안걸면 조짐
// while (true){
//   console.log('hello');
// }

//   console.log('하이');

// 1~100 랜덤정수
// random() * (y - x + 1) + x


while(true){
  var rn = Math.floor(Math.random()*100) +1;
  console.log('hello');
  if(rn === 7)break;
  
}
console.log('반복문 종료!!');


// for문으로 무한루프
// for(;;){
//   var rn = Math.floor(Math.random()*100) +1;
//   console.log('hello');
//   if(rn === 7)break;
  
// }
// console.log('반복문 종료!!');