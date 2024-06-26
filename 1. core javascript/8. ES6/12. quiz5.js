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
      city: "부산",
    },
    year: 2022,
    value: 780000,
  },
];






// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
let total = 0;
const daejeonTotal = traders
.filter(traders => traders.trader.city === '대전' && traders.year === 2023)
.map(traders => traders.value)
.forEach(traders => total += traders);
console.log(`대전 거래 총액: ${total}`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const busanTrs = traders
.filter(traders => traders.trader.city === '부산')
.map(traders => traders.trader.name)
console.log(busanTrs);


// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
// 거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
let high = 0;
const highValue = traders
.map(traders => traders.value)
.reduce((max, n) => max < n ? n : max);

const highValueTrader = traders
.filter(traders => traders.value === highValue)
.map(traders => traders.trader)
console.log(highValueTrader);

console.log(`거래자 정보: ${highValueTrader.name}, 거래액: ${highValue}`);





// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요. 
// 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

// const seoul = traders
// .filter(traders => traders.trader.city === '서울')
// .map(traders => traders.value)
// .reduce((max, n) => max + n);

// const daejeon = traders
// .filter(traders => traders.trader.city === '대전')
// .map(traders => traders.value)
// .reduce((max, n) => max + n);

// const busan = traders
// .filter(traders => traders.trader.city === '부산')
// .map(traders => traders.value)
// .reduce((max, n) => max + n);


// console.log(`서울: ${seoul}, 대전: ${daejeon}, 부산: ${busan}`);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아, 해당 거래의 연도별로 분류해주세요. 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**



// const highTrs = traders
// .filter(traders => traders.value >= 700000)
// .map(traders => traders.year)
//  console.log(highTrs);

// 최종 결과 객체
// const trsOver700kByYear = {};



// for (const trs of traders) {} //아래 traders.forEach(trs => {}와 같은코드

// traders.forEach(trs => {
//   if (trs.value >= 700000) { // 거래액 필터 조건
//     const yearString = trs.year.toString();
//     if (!trsOver700kByYear[yearString]) {
//       trsOver700kByYear[yearString] = [trs];
//     } else { // 지금 거래년도가 저장되어 있다면
//       trsOver700kByYear[yearString].push(trs);
//     }
//   }
// })
  
// // }
// console.log(JSON.stringify(trsOver700kByYear, null, 2));

const trsOver700kByYear = traders 
  .filter(trs => trs.value >= 700000)
  .reduce((transactions, trs) => {
    const yearString = trs.year.toString();
    if (!transactions[yearString]) {
      transactions[yearString] = [trs];
    }else {
      transactions[yearString].push(trs);
    }
    return transactions;
  }, {});

console.log(JSON.stringify(trsOver700kByYear, null, 2));


// 6. **각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요. 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

const trsDataByName = traders.reduce((averageList, trs) => {
  const name = trs.trader.name;
  if (!averageList[name]) { // 이 사람이름이 처음 등장했으면
    averageList[name] = { total: trs.value, count: 1 };
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }
  return averageList;
}, {});

// console.log(trsDataByName);

// 평균 구하기
for (const key in trsDataByName) {
  trsDataByName[key].average = trsDataByName[key].total / trsDataByName[key].count;

}
console.log(trsDataByName);

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의 이름과 그 거래 횟수를 출력해주세요.**

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

