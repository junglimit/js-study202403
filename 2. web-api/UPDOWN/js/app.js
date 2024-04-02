//============== 전역 변수 정의 영역 =============//
const gameData = {
  secret: Math.floor(Math.random() * 100) + 1, // 실제 정답
  answer: null, // 사용자가 선택한 구슬의 숫자를 저장
  min: 1,
  max: 100,
};

//=============== 함수 정의 영역 ================//

// 1. 100개의 숫자가 담긴 구슬을 화면에 그려야 함

// 하나의 구슬을 만드는 함수
function makeNewIcon($container, i) {
  const $newDiv = document.createElement('div');
  $newDiv.classList.add('icon');
  $newDiv.textContent = i;

  $container.appendChild($newDiv);
}

// 숫자가 담긴 구슬을 생성하는 함수
function createNumberIcons() {
  const $numbersContainer = document.getElementById('numbers');

  const { min, max } = gameData;
  for (let i = min; i <= max; i++) {
    makeNewIcon($numbersContainer, i);
  }
}

// 답변 검증 및 처리
function verifyAnswer() {
  const { secret, answer } = gameData;
  if (secret === answer) { // 정답인 경우

  } else { // 정답이 아닌 경우 (up or down)
    const isUp = secret > answer;
    document.getElementById(isUp ? 'up' : 'down').classList.add('selected');
    document.getElementById(isUp ? 'down' : 'up').classList.remove('selected');
  }
}

//=============== 함수 실행 영역 ================//
createNumberIcons();

document.getElementById('numbers').addEventListener('click', (e) => {
  if (!e.target.matches('#numbers .icon')) return;

  // 클릭한 구슬의 숫자가 정답과 비교해서 up인지 down인지 정답인지 판별
  // 클릭한 구슬의 숫자를 gameData.answer에 저장
  gameData.answer = +e.target.textContent;
  // console.log(gameData);
  verifyAnswer();
});
