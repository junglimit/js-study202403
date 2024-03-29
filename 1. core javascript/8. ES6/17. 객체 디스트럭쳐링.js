
const employee ={
  empName: '뽀로로',
  age: 10,
  hireDate: '2020-01-30',
  birthDate: '2015-12-31'
}

const { empName, hireDate } = employee;

console.log(`name: ${empName}, hire: ${hireDate}`);

function foo(empName, age) {
  // const {empName, age} = employee;
  console.log(`내이름은 ${empName}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}

const age = 10;
// 변수 이름이 충돌났을때 : 을 사용해서 변경가능
const { age: empAge, birthDate } = employee;
console.log(empAge);

const divStyle = {
  'font-size': '18px',
  'background-color': 'red'
};

const { 'font-size': fontSize, 'background-color': bgColor } = divStyle;
console.log(fontSize);
console.log(bgColor);



console.log('====================');

const dog = {
  kind: '몰띠즈',
  name: '해잉',
  age: 3,
  injection: false
};
const {kind, age: petAge, ... rest} = dog;
console.log(kind); 
console.log(petAge); 
console.log(rest);

// 객체 안전 복사
const copyDog = {...dog };
copyDog.age = 10;

const copyDog2 = {
  ...dog,
  age: 2,
  favorite: ['산책','해윙하기']
}

console.log(dog);
console.log(copyDog);
console.log(copyDog2);
