// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению.
//     Если значение не найдено, функция должна возвращать undefined.
//     Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object, U>(
  object: T,
  value: U,
): keyof T | undefined {
  for (const key in object) {
    if (object[key] === value) {
      return key as keyof T;
    }
  }
  return;
}

const person = {
  name: "Oleg",
  salary: 2000,
  isManager: false,
};

console.log(getKeyByValue(person, "Oleg"));
console.log(getKeyByValue(person, 2000));
console.log(getKeyByValue(person, true));
