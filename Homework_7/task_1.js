// 1. Бесконечные аргументы
//   - Напишите функцию, принимающую на вход любое количество массивов
//   - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
//   - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
//   - Решить с использованием Spread operator

function mergeArrays(...array) {
  return [].concat(...array);
}
console.log("Hw_1:");
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

// 2. Devide by _
//   - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его.
//   - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем.
//   - Пример: I am super engineer => i_Am_Super_Engineer

function capitalizeSnakeCase(str) {
  return str
    .split(" ")
    .map(
      (word, index) =>
        (index === 0 ? word[0].toLowerCase() : word[0].toUpperCase()) +
        word.slice(1)
    )
    .join("_");
}

console.log("\nHw_2:");
console.log(capitalizeSnakeCase("I am super engineer"));

// 3. Фибаначчи
//   - Напишите функцию fibanacci(n), возвращающую энное число Фибоначчи
//   - числа Фибоначчи (строка Фибоначчи) — числовая последовательность, первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
//   - Например fibanacci(8) //21

function fibanacci(number) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= number; i++) [a, b] = [b, a + b];
  return b;
}

console.log("\nHw_3:");
console.log(fibanacci(8));
