


var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
  var choice = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );
  if (choice === '1') {
    var newName = prompt('추가할 새로운 멤버의 이름을 입력하세요.');
    tvxq.push(newName);
    alert(`${newName}이(가) 추가되었습니다.`);
  } else if (choice === '2') {
    var delName = prompt('삭제할 멤버의 이름을 입력하세요.');
    var idx = tvxq.indexOf(delName);
    if (idx !== -1) {
      tvxq.splice(idx, 1);
      alert(`${delName}이(가) 삭제되었습니다.`);
    } else {
      alert(`${delName}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
    }
  } else if (choice === '3') {
    alert('프로그램을 종료합니다.');
    break;
  } else {
    alert('잘못된 입력입니다. 메뉴 번호를 정확하게 입력해주세요.');
  }
}
