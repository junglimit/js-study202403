// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.


var rn = Math.floor(Math.random()*50) +1;
while(true){
  var num = +prompt('1 ~ 50 사이의 무작위 숫자를 맞춰보세여')
  if(num > 50 || num < 1){
    alert('1 ~ 50 사이의 숫자를 넣어주세용')
    continue;} 

  if(num < rn){
    alert('UP!!!!')
    // continue;
  }else if(num > rn){
    alert('DOWN!!!!') 
    // continue;
  }else if(num === rn)break;
}
alert('딩동댕 ~~~~ !!');





//강사님 코드

// 정답 생성
// var secret = Math.floor(Math.random() * 100) + 1;

// 사용자의 입력값
// var answer = +prompt(`숫자를 입력하세요! [1 ~ 100] ${secret}`);

// 정답 판정
// if (secret === answer) {
//   alert(`정답입니다!`);
// } else if (secret > answer) {
//   alert(`UP!!`);
// } else {
//   alert(`DOWN!!`);
// }
