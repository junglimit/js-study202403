// 주어진 초기 값에서 시작하여 호출될 때마다 해당 값에 더하는 클로저 함수를 만드세요.

// const createAdder = (initialValue) => {
//   let num = initialValue;
//   return () => {
//     num ++
//     return num;
//   }
// };

// const adderFromTen = createAdder(10);
// console.log(adderFromTen()); // 11
// console.log(adderFromTen()); // 12
// console.log(adderFromTen()); // 13


// 주어진 초기 값과 증가량을 이용하여 호출될 때마다 해당 값에 증가량을 더하는 클로저 함수를 만드세요.

const createIncrementor = (initialValue, incrementAmount) => {
  let num = initialValue;
  return () => {
    num += incrementAmount;
    return num;
  }
};

const incrementorFromTenByTwo = createIncrementor(10, 2);
console.log(incrementorFromTenByTwo()); // 12
console.log(incrementorFromTenByTwo()); // 14
console.log(incrementorFromTenByTwo()); // 16

console.log('=========================================');

// 주어진 초기 값과 감소량을 이용하여 호출될 때마다 해당 값에서 감소량을 빼는 클로저 함수를 만드세요.

const createDecrementor = (initialValue, decrementAmount) => {
  let num = initialValue;
  return () => {
    num -=decrementAmount;
    return num;
  }
};

const decrementorFromTwentyByThree = createDecrementor(20, 3);
console.log(decrementorFromTwentyByThree()); // 17
console.log(decrementorFromTwentyByThree()); // 14
console.log(decrementorFromTwentyByThree()); // 11

console.log('=========================================');


// 주어진 초기 값과 변경할 값을 파라미터로 받아서 호출될 때마다 해당 값으로 설정하는 클로저 함수를 만드세요.

const createSetter = (initialValue) => {
  return(num) =>{
    return num;
  }
};

const setterFromZero = createSetter(0);
console.log(setterFromZero(5)); // 5
console.log(setterFromZero(10)); // 10
console.log(setterFromZero(-3)); // -3


console.log('=====================================');

// 주어진 초기 값과 감소량을 이용하여 호출될 때마다 해당 값에서 감소량을 빼고,
// 최종 값이 주어진 임계값보다 작을 때에만 해당 값을 반환하는 클로저 함수를 만드세요.

const createDecrementorWithThreshold = (initialValue, decrementAmount, threshold) => {
  let value = initialValue;
  return () => {
    value -= decrementAmount;
    if (value < threshold) {
      return undefined;
    } else {
      return value;
    }
  };
};

const decrementorFromTwentyByThreeWithThreshold = createDecrementorWithThreshold(20, 3, 10);
console.log(decrementorFromTwentyByThreeWithThreshold()); // 17
console.log(decrementorFromTwentyByThreeWithThreshold()); // 14
console.log(decrementorFromTwentyByThreeWithThreshold()); // 11

console.log('=====================================');

// 주어진 초기 값과 곱할 값을 파라미터로 받아서 호출될 때마다 해당 값으로 곱한 결과를 반환하는 클로저 함수를 만드세요.

const createMultiplier = (initialValue) => {
  let num = initialValue;
  return (a) =>  num * a;
};

const multiplierFromFive = createMultiplier(5);
console.log(multiplierFromFive(2)); // 10
console.log(multiplierFromFive(3)); // 15
console.log(multiplierFromFive(4)); // 20
