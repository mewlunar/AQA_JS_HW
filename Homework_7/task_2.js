// 1. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function palindrome(str) {
  return str.split("").reverse().join("") === str
    ? "Палиндром"
    : "Не является палиндромом";
}

console.log("Hw_1:");
console.log(palindrome("abba"));

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра
//     и возвращает слово с наибольшим количеством букв.
//     Если таких слов несколько - возвращает их все.

function longestWords(str) {
  const words = str.split(" ");
  const maxLength = Math.max(...words.map((word) => word.length));
  return words.filter((word) => word.length === maxLength).join(" ");
}

console.log("\nHw_2:");
console.log(longestWords("1 22 333 55555 4444 55555"));
