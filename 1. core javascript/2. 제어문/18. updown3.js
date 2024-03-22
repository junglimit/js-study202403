// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.
// 난이도 상수
const HIGH = 1, MIDDLE = 2, LOW = 3;

var initCount; // 사용자의 총 입력 기회

while(true){

while (true) {
  // 난이도 선택
  var level = +prompt(
    '난이도를 선택하세요!\n# [1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]'
  );
  

  if (level === HIGH) {
    initCount = 3;
  } else if (level === MIDDLE) {
    initCount = 6;
  } else if (level === LOW) {
    initCount = 10;
  } else {
    alert('난이도를 숫자로 다시 입력해주세요');
    continue;
  }

  break;
}

// 정답 생성
var secret = Math.floor(Math.random() * 100) + 1;

var countDown = initCount; // 입력기회 횟수

var min = 1, max = 100;

while (true) {
  // 사용자의 입력값
  var answer = +prompt(`숫자를 입력하세요! [${min} ~ ${max}]`);
  
  if(answer < min || answer > max){
    alert('범위 안의 값을 입력하시오!');
    continue;
  }
  countDown--;
  // 정답 판정
  if (secret === answer) {
    alert(`정답입니다!`);
    break;
  } else if (secret > answer) {
    alert(`UP!!`);
    min = answer + 1;
  } else {
    alert(`DOWN!!`);
    max = answer - 1;
  }

  // 카운트다운 게임 종료 조건
  if (countDown <= 0) {
    alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
    break;
  } else {
    alert(`${countDown}번의 기회가 남았습니다.`);
  }
}


  // 게임 재시작 여부 확인
  var exitFlag = confirm('한판 더 하쉴?'); //확인 = true , 취소 = false
  if(!exitFlag){
    alert('뱨잉')
    break;
  }else{
    alert('원몰레쓰고')
  }
}
