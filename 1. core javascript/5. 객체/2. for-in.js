
var phone = {
  company: '삼성',
  color: '펄 화이트',
  model: '갤럭시 S24 Ultra',
  price: 1200000
};

// key가 반복됨
for (var data in phone){
  // console.log(data); // key를 구함
  console.log(phone[data]); // 반복되는 data가 string타입이기 때문에 .data가 아니라 []를 사용한다.
  // console.log(typeof data);
}

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하기
console.log('============================');
console.log('memory' in phone); // key가 존재하는지 미리 확인하기(협업시)

var newKey = 'memory';
if(!(newKey in phone)){
phone[newKey] = '32GB';
}
