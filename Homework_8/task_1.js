// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
numberArray = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];
//   1. forEach - выведите в консоль все числа, делящиеся без остатка на 3 // 30
function findMultiples(array, number) {
  const newArr = [];
  array.forEach((element) => {
    if (element % number === 0) newArr.push(element);
  });
  return newArr.join(", ");
}

console.log("Hw_1:");
console.log(findMultiples(numberArray, 5));

//   2. map - создайте новый массив, в котором из каждого элемента изначального массива вычли длину изначального массива
//      // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
function lengthSubtraction(array) {
  return array.map((el) => el - array.length);
}

console.log("\nHw_2:");
console.log(lengthSubtraction(numberArray));

//   3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
//      // [8, 30, 85, 95, 94]
function filterArray(array) {
  return array.filter(
    (number, index) => index > 0 && number > array[index - 1]
  );
}

console.log("\nHw_3:");
console.log(filterArray(numberArray));

//   4. find - найдите элемент, равный своему индексу //2
function findElementEqualToIndex(array) {
  return array.find((element, index) => element === index);
}

console.log("\nHw_4:");
console.log(findElementEqualToIndex(numberArray));

//   5. sort - отсортируйте массив по возрастанию, не изменив изначальный
//      // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
function arraySorting(array) {
  return [...array].sort((a, b) => a - b);
}

console.log("\nHw_5:");
console.log(arraySorting(numberArray));

//   6. reduce - получите сумму всех чисел массива //466
function calculateSum(array) {
  return array.reduce((accum, currentValue) => accum + currentValue);
}

console.log("\nHw_6:");
console.log(calculateSum(numberArray));
//   7. some - проверьте, есть ли в массиве элементы больше 90 //true
function hasElementGreaterThan(array, number) {
  return array.some((el) => el > number);
}

console.log("\nHw_7:");
console.log(hasElementGreaterThan(numberArray, 90));

//   8. every - проверьте, что все элементы массива двухзначные //false
function isEveryNumberTwoDigit(array) {
  return array.every((number) => number >= 10 && number < 100);
}

console.log("\nHw_8:");
console.log(isEveryNumberTwoDigit(numberArray));
