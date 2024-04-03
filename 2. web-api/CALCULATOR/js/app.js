
// 실행 코드( 함수 호출, 이벤트 등록, 핸들러정의 ...)


// 이벤트 핸들러 바인딩
$addBtn.addEventListener('click', e => {
  // 연산 처리 함수
  calculate('+');
});
$subtractBtn.addEventListener('click', e => {
  calculate('-');
});
$multiplyBtn.addEventListener('click', e => {
  calculate('x');
});
$divideBtn.addEventListener('click', e => {
  calculate('/');
});