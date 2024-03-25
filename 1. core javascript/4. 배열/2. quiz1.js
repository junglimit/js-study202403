



var scores = [83, 99, 100, 57]
var total = 0;

for (var i = 0; i < scores.length; i++){
  total = scores[i] + total 
}

// for(var s of scores){
//   total += s;
// }

console.log(`총점 : ${total}, 평균 : ${total / scores.length}`);
