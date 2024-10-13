// Создайте функцию, принимающую число n, которая при каждом вызове будет генерировать случайное число [1 - n] включительно.
//    Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах).
//    И так пока не переберутся все n чисел. На n + 1 вызов и далее функция должна возвращать 'All numbers were received'.
//    Задачу решить через замыкания
//     Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

//   Рекоммендации:
//    - Для генерации числа в границах воспользуйтесь методом:

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min + 1));
}

function randomNumberGeneration(number) {
  let arrNumber = [];
  return function () {
    if (arrNumber.length === number) {
      return "All numbers were received";
    }

    let randomNumber = getRandomArbitrary(1, number);

    while (arrNumber.includes(randomNumber)) {
      randomNumber = getRandomArbitrary(1, number);
    }

    arrNumber.push(randomNumber);
    return randomNumber;
  };
}

const randomGenerator = randomNumberGeneration(5);

console.log(randomGenerator());
console.log(randomGenerator());
console.log(randomGenerator());
console.log(randomGenerator());
console.log(randomGenerator());
console.log(randomGenerator());
