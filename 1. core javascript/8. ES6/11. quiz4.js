


const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];


// 연습 1: 2022년에 발생한 모든 거래를 찾아
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요

// const tradeYear = traders.filter(traders => traders.year === 2022)
// console.log(tradeYear);
const tradeYear = traders
.filter(traders => traders.year === 2022)
.map(traders => traders.trader);
console.log(tradeYear);


// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const city = traders.map(treders => treders.trader.city);
const newCity = [...new Set(city)]; // Set : 집합
console.log(newCity);


// 연습 3: 대전에 근무하는
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.

const daejeonTraders = traders
  .filter(traders => traders.trader.city === '대전')
  .map(traders => traders.trader);
  console.log(daejeonTraders);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const allTraders = traders.map(traders => traders.trader.name);
const newAllTraders = [...new Set(allTraders)]
console.log(newAllTraders);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
let sum = 0;

const allValue = traders
.map(traders => traders.value)
.forEach(traders => sum += traders);

console.log(sum);