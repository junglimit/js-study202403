
//  x부터 y까지의 누적합을 구해야 함

function calcRangeTotal(x, y){
  var total = 0;
  for (var i = x; i <= y; i++){
    total+= i;
  }
  return total;
}

var result1 = calcRangeTotal(1, 10);
console.log(result1);

var result2 = calcRangeTotal(4, 7);
console.log(result2);


// 매개변수의 기본값

function sayHello(language='한국어'){
  
  // ES5
  // language = language || '한국어';

  switch(language){
    case '한국어':
      console.log('안녕하세요');
      break;
    case '영어':
      console.log('Hello');
      break;
    case '중국어':
      console.log('따자하오');
      break;
    case '일본어':
      console.log('곤니찌와');
      break;
      default:
        console.log('우어어어');
  }
}

sayHello();

//  매개변수가 없는 함수
function selectRandonPet(){

  var pets = ['멍멍이', '야옹이', '짹짹이', '고라니', '노루루'];
  var rn = Math.floor(Math.random() * pets.length);
  return pets[rn];
}

var r1 = selectRandonPet();
var r2 = selectRandonPet();
var r3 = selectRandonPet();
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);