// 1. Context
//   - Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord), который будет возвращать строку вида:
//     `${greetingsWord}, my name is ${name}, i'm ${age} and my salary is ${salary}`.
//     Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
const qa = {
  name: "Viktoria",
  age: 29,
  salary: 2000,
  getInfo(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;
  },
};

console.log("Hw_1:");
console.log(qa.getInfo("Hello"));
// 2. Changing the context
//   - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
//   - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()

const anotherQa = {
  name: "Oleg",
  age: 35,
  salary: 3000,
};

console.log("\nHw_2:");
console.log(qa.getInfo.bind(anotherQa)("Hi"));
// console.log(qa.getInfo.bind(anotherQa, "Hi")());
console.log(qa.getInfo.call(anotherQa, "Hi"));
console.log(qa.getInfo.apply(anotherQa, ["Hi"]));

// 3. Closures
//   - Создайте функцию createCounter(),
//   - Создайте в функции createCounter переменную count, которая будет равна 0
//   - Верните из функции createCounter новую функцию
//   - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
//   - После увеличение каунтера выводите в консоль `Function was called ${count} times`
//   - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
//   - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные
const createCounter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(`Function was called ${count} times`);
  };
};

console.log("\nHw_3:");
const functionCallCounter = createCounter();

functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
functionCallCounter();
