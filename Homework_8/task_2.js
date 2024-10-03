//   Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
//     Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
function numberOfVowels(word) {
  const vowelArray = ["a", "e", "i", "o", "u", "y"];
  return word
    .toLowerCase()
    .split("")
    .filter((el) => vowelArray.includes(el)).length;
}

function arraySorting(array) {
  return [...array].sort((a, b) => numberOfVowels(a) - numberOfVowels(b));
}

const words = [
  "umbrella",
  "apple",
  "ocean",
  "independent",
  "education",
  "elephant",
  "island",
  "universe",
  "environment",
  "queue",
];

console.log(arraySorting(words));
