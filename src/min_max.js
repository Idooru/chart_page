function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

// 랜덤한 실수를 생성하여 배열에 추가하는 예제
let myArray = [];

for (let i = 0; i < 5; i++) {
  let randomFloat = getRandomFloat(0, 5); // 0 이상 1 미만의 랜덤한 실수 생성
  myArray.push(randomFloat); // 배열에 추가
}

const roundedNumbers = myArray.map((item) => parseFloat(item.toFixed(2)));

// 현재 최솟값과 최댓값
const currentMin = Math.min(...roundedNumbers);
const currentMax = Math.max(...roundedNumbers);

// 0.05의 배수로 조정된 최솟값과 최댓값
const adjustedMin = Math.floor(currentMin * 20) / 20;
const adjustedMax = Math.ceil(currentMax * 20) / 20;

console.log(roundedNumbers);
console.log(adjustedMin.toFixed(2));
console.log(adjustedMax.toFixed(2));
