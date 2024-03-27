/*
  Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
     반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/

function calcNumbersTotalAndAverage(...numbers){
  var result = 0;
  for(var n of numbers){
    result += n
  }
  return{
    total: result,
    avg: result / numbers.length
  }
}
// ES6 에선 객체에 키밸류를 구분하지 않고 하나만 써두면 키와 밸류가 같은 이름으로 지정됨

var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);