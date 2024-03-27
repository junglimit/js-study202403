


const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
  },
];


console.log('=========================');



function map(condition) {
  const arr = [];
  for(const user of userList){
      arr.push(condition(user));
  }
  return arr;
}



// 회원의 이름들만 다 추출해서 배열에 담기
const nameList = map(user => user.userName);
console.log(nameList);


// 회원의 주소들만 다 추출해서 배열에 담기
const addressList = map(user => user.address);
console.log(addressList);

// 회원의 첫번째 취미들만 다 추출해줘
const firstHobbyList = map(user => user.hobbys[0]);
console.log(firstHobbyList);

// 모든 회원의 이름과 계정을 연결해서 배열에 담기
const nameAcount = map(user => `${user.userName}(${user.account})`);
console.log(nameAcount);


