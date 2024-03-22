// 사용자들은 입력 기회가 5번으로 제한된다. 
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

var rn = Math.floor(Math.random()*50) +1;
var count = 5;
while(true){
  for(var i = 0; i < 5; i++){
  var num = +prompt('1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세여')
  if(num > 50 || num < 1){
    alert('1 ~ 50 사이의 숫자를 넣어주세용')
    continue;} 
    count--;

  if(num < rn){
    alert('UP!!!!')
    // continue;
  }else if(num > rn){
    alert('DOWN!!!!') 
    // continue;
  }else if(num === rn)break;
  
  alert(`기회가 ${count}번 남았습니다.`)

  if(count === 0){
    break;
  }
}break;
}
if(count === 0){
  alert('기회를 모두 소진했습니다. GAME OVER!!')
}else{
alert('딩동댕 ~~~~ !!')
}
