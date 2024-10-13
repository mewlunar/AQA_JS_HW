// Имеется объект
const character = { name: "Barney", age: 36, gender: "male", isQa: true };

// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
function getFourLetterKeys(obj) {
  return Object.keys(obj).filter((el) => el.length === 4);
}

console.log("Hw_1:");
console.log(getFourLetterKeys(character));

// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'
function getFourLetterValue(obj) {
  return Object.values(obj).filter((el) => el === "" + el);
}

console.log("\nHw_2:");
console.log(getFourLetterValue(character));

// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for.
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
function getKeyValue(obj) {
  Object.entries(obj).forEach(([key, value]) =>
    console.log(`key = ${key}, value = ${value}`)
  );
}

console.log("\nHw_3:");
getKeyValue(character);

// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())
console.log("\nHw_4:");
console.log(`salary in object = ${"salary" in character}`);
console.log(`salary in object = ${Object.hasOwn(character, "salary")}`);
