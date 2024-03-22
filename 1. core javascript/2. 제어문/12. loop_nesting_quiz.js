// var x = prompt('한 변(1)')
// var y = prompt('한 변(2)')
// var space = '\n'
// var stars = ''
// for(var i = 1; i <= 3; i++){
//   for(var j = 1; j <= 4; j++){
    
//     stars += '*' 
//     console.log(stars);
//   }
  
  // console.log(space);
// }

console.log('===============');

var width = +prompt('한 변 (1):')
var height = +prompt('한 변 (2):');

// 사각형을 저장할 변수
var rectangle = '';

for(var i = 0; i < width; i++){
  
  for(var j = 0; j < height; j++){
    rectangle += '* ';
  }
  rectangle +='\n';
}
  alert(rectangle);