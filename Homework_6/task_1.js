// 1. Цикл for..of в массиве
//   - Создайте массив [1,2,3,4,5,6,7,8,9,10]
//   - Создайте цикл for..of, бегущий по массиву, в котором будет реализована следующая логика:
//     если элемент четный - возведет его в квадрат
//     если элемент нечетный - возведет его в 3ю степень

function transformArray(array) {
  const newArray = [];
  for (const number of array) {
    number % 2 === 0 ? newArray.push(number ** 2) : newArray.push(number ** 3);
  }
  return newArray;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("hw_1:");
console.log(transformArray(numbersArray));

// 2. Методы массивов
//   - Создайте массив [1,2,3,4,5]
//   - Добавьте в конец массива число 6 соответствующим методом
//   - Добавьте в начало массива число 0 соответствующим методом
//   - Удалите элемент с индексом 2 из массива соответствующим методом
//   - Удалите последний элемент из массива соответствующим методом
//   В результате вы должны получить [0, 1, 3, 4, 5]

function modifyArray(array) {
  const newArray = [0, ...array, 6];
  newArray.splice(2, 1);
  newArray.pop();
  return newArray;
}
let arrayNumber = [1, 2, 3, 4, 5];

console.log("\nhw_2:");
console.log(modifyArray(arrayNumber));

// 3. Деструктуризация массивов
//   - Создайте массив из 5 любых чисел (придумать числа самим)
//   - Через деструктуризацию получите в новые переменные первый, второй и остальные элементы массива
//   - Пример: [1,2,3,4,5] => first === 1; second === 2, rest === [3,4,5]

function destructurizationArray(arr) {
  const [first, second, ...rest] = arr;
  return [first, second, rest];
}

const numberArray = [12, 17, 15, 10, 8];

const [first, second, rest] = destructurizationArray(numberArray);

console.log("\nhw_3:");
console.log(first, second, rest);

// 4. Конкатенация массивов
//   - Создайте массив с числами [1,2,3,4,5]
//   - Создайте еще 1 массив с числами [6, 7, 8, 9, 10]
//   - Создайте переменную mergedArray, который будет хранить значения из массивов 1 и 2
//   - Используйте спред оператор

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}

const numberArray_1 = [1, 2, 3, 4, 5];
const numberArray_2 = [6, 7, 8, 9, 10];

const mergedArray = mergeArrays(numberArray_1, numberArray_2);

console.log("\nhw_4:");
console.log(mergedArray);
