const characters = [
  { name: "Barney", age: 36 },
  { name: "Fred", age: 40 },
  { name: "Jack", age: 50 },
];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters.
//     Объект должен иметь поля name (string) и age (number)
function isValidCharacter(obj) {
  return typeof obj.name === "string" && typeof obj.age === "number";
}

function addCharacter(character) {
  isValidCharacter(character)
    ? characters.push(character)
    : console.log("Объект должен иметь поля name (string) и age (number)");

  return characters;
}
const char = {
  name: "Tanya",
  age: 25,
};

console.log("Hw_1:");
console.log(addCharacter(char));

// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
function getCharacter(name) {
  return characters.find((el) => el.name === name);
}

console.log("\nHw_2:");
console.log(getCharacter("Fred"));

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'c', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
function getCharactersByAge(minAge) {
  return characters.filter((el) => el.age >= minAge);
}

console.log("\nHw_3:");
console.log(getCharactersByAge(40));

// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
function updateCharacter(name, newCharacter) {
  const objName = getCharacter(name);

  if (!objName) {
    console.log("Нет обьекта с таким именем");
    return characters;
  }

  if (!isValidCharacter(newCharacter)) {
    console.log("Объект должен иметь поля name (string) и age (number)");
    return characters;
  }

  objName.name = newCharacter.name;
  objName.age = newCharacter.age;

  return characters;
}

const newChar = {
  name: "Oleg",
  age: 38,
};

console.log("\nHw_4:");
console.log(updateCharacter("Fred", newChar));

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
function removeCharacter(name) {
  const index = characters.findIndex((el) => el.name === name);

  if (index === -1) {
    console.log("Нет объекта с таким именем");
    return characters;
  }

  characters.splice(index, 1);
  return characters;
}

console.log("\nHw_5:");
console.log(removeCharacter("Oleg"));
