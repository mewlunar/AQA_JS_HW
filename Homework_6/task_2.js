// 1. У вас есть массив названий пицц вашего конкурента. Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив)
//   и выводить в консоль только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вывести в консоль null.
//   Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента

function findMyUniquePizzas(arrayMyPizzas, arrayCompetitorPizzas) {
  const lowerCaseCompetitorPizza = arrayCompetitorPizzas.map((pizza) =>
    pizza.toLowerCase()
  );
  const uniquePizzas = arrayMyPizzas.filter(
    (pizza) => !lowerCaseCompetitorPizza.includes(pizza.toLowerCase())
  );
  return arrayMyPizzas.length === arrayCompetitorPizzas.length &&
    !uniquePizzas.length
    ? null
    : uniquePizzas;
}

const competitorPizzas = [
  "Peperoni",
  "Caprichosa",
  "Diablo",
  "4 cheeses",
  "hawai",
];

const myPizzas = [
  "Peperoni",
  "Caprichosa",
  "Romana",
  "Diablo",
  "4 cheeses",
  "Hawai",
  "Marinara",
];

console.log(findMyUniquePizzas(myPizzas, competitorPizzas));
