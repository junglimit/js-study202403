
// 프로그램 전체에서 사용할 전역적인 변수와 상수와 함수를 정의
const $userInput = document.getElementById('input-number');
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');
// const $logs = document.getElementById('log-entries')
const $logList = document.querySelector('.log-entries')
// result 요소 노드
const $currentResult = document.getElementById('current-result');
// 계산 로그 요소노드
const $currentCalculation = document.getElementById('current-calculation');

// result에 그려질 숫자
let currentResult = 0;

// ======================== 함수 정의 영역 ===================== // 
// 계산 기능 헬퍼 함수
const calculate = (operator) => {
  // 더하기를 해야 함
  // 계산 전 값을 백업
  const prevResult = currentResult;
  // 1. 입력창에 입력한 숫자를 읽어와야 함
  const enteredNumber = +$userInput.value;

  // 2. 결과에 누적
  switch(operator){
    case '+': currentResult += enteredNumber;
    break;
    case '-': currentResult -= enteredNumber;
    break;
    case 'x': currentResult *= enteredNumber;
    break;
    case '/': parseInt(currentResult /= enteredNumber); // 소수점 떼기 Math.floor
    break;
    default:
      break;
  }
 

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} ${operator} ${enteredNumber}`
  $currentCalculation.textContent = descriptionLog;

  // 지난 계산 로그 생성
  let arr = [];
  const log = `${prevResult} ${operator} ${enteredNumber} = ${currentResult}`
  arr.push(log);
  arr.forEach(log => {
    const $logItem = document.createElement('li');
    $logItem.classList.add('log-entries__item');
    $logItem.textContent = log;
    $logList.appendChild($logItem);
  });

};