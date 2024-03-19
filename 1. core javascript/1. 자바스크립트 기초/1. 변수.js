
var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당(대입),=는 같다라는 뜻이 아니라 우항의 값을 좌항의 공간에 저장하라는 의미

var multiple = result * 3; // 90
console.log(multiple);

var fruit; // 변수만들기
fruit = '자몽'; // 초기화 (이땐 var,let,const안씀)
console.log(fruit);

var food = '볶음밥'; // 변수만들고 초기화
food = '돈까스' // 변수 재할당 
console.log(food);


// 변수 이름 규칙
// var 7number;  숫자 맨앞에오면 안됨
var num7ber;

// var user name; 띄어쓰기 안됨
var current_login_user_phone_number; // snake case (python)
var currentLoginUserPhoneNumber; // camel case (js,java)

var apple;
var APPLE;
var Apple;

// var myPetName!; // 특수문자안됨
var $myPetName_; // $랑 _만 됨

// var for; // 문법 기능 들어간걸로 못만듬 (예약어)
// var let;
var For; 
var lEt;


var myMoney = 1000;

const $orange = '#ffa808';

console.log($orange);
