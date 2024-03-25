/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 삭제할 멤버 이름을 입력받고 해당 멤버를 배열에서 삭제시킨 뒤 삭제 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 다시 삭제할 이름을 입력할 수 있도록 하세요.
4. 전체멤버를 정확하게 삭제할때까지 프로그램은 계속되어야 합니다.
*/



var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];
while (true) {
  var modifyTarget = prompt(`현재 멤버: ${tvxq}\n수정할 이름을 입력하세요.`)

  if(tvxq.includes(modifyTarget)){
    // 삭제 타겟이 있는 경우
    var newName = prompt('새로운 이름을 입력하세요!')
    tvxq[inx] = newName;
    var idx = tvxq.indexOf(modifyTarget);
    tvxq.splice(idx, 1);
    alert(`수정 완료!\n남은 멤버: [${tvxq}]`);
    break;
  }else{
    // 삭제 타겟이 없는 경우
    alert(`${modifyTarget}은(는) 잘못된 이름입니다.\n다시 입력하세요!`);
  }
}
