// Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
//   и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты.
//   Решите эту задачу, используя эффективные методы массива.

// Пример: const arr = [5,2,7,3,8,1,6] //4

//Solution 1:
function findMissingNumber(array) {
  const uniqueNumbersArray = [...new Set(array)];
  const min = Math.min(...array);
  const max = Math.max(...array);
  const missingValues = [];

  for (let i = min; i <= max; i++) {
    if (!uniqueNumbersArray.includes(i)) {
      missingValues.push(i);
    }
  }
  return missingValues.length > 0 ? missingValues : "No missing values";
}

//Solution 2:
function findMissingNumberByReduce(array) {
  const uniqueNumbersArray = [...new Set(array.sort((a, b) => a - b))];

  const missingValues = uniqueNumbersArray.reduce(
    (acc, current, index, arr) => {
      const previous = arr[index - 1];
      const difference = current - previous;

      if (difference > 1) {
        for (let i = previous + 1; i < current; i++) {
          acc.push(i);
        }
      }

      return acc;
    },
    []
  );

  return missingValues.length > 0 ? missingValues : "No missing values";
}

const arr = [5, 2, 7, 8, 8, 10, 1, 6];

console.log("Solution_1:");
console.log(findMissingNumber(arr));

console.log("\nSolution_2:");
console.log(findMissingNumberByReduce(arr));
