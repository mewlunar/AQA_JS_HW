import { Pizzeria } from './pizzeria/pizzeria';
import { DOUGH_TYPE, PIZZA_SIZE } from './data/types';
import { PIZZA_NAMES } from './data/types';

const pizzeria = new Pizzeria(
  'Filipp’s Pizza',
  'Volgograd, Sovetskaya st. 17/1',
  '9-22'
);

const order = pizzeria.createOrder([]);
order.addPizza(
  PIZZA_NAMES.MARGHERITA,
  DOUGH_TYPE.THIN_DOUGH,
  PIZZA_SIZE.SMALL,
  ['beef']
);
order.addPizza(PIZZA_NAMES.HAWAIIAN, DOUGH_TYPE.THIN_DOUGH, PIZZA_SIZE.MEDIUM);

const order_2 = pizzeria.createOrder([]);
order_2.addPizza(
  PIZZA_NAMES.CHEESE,
  DOUGH_TYPE.CLASSIC_DOUGH,
  PIZZA_SIZE.LARGE,
  ['chicken', 'onion', 'bacon', 'cheddar', 'pepper', 'pineapple']
);
order_2.addPizza(
  PIZZA_NAMES.PEPPERONI,
  DOUGH_TYPE.THIN_DOUGH,
  PIZZA_SIZE.MEDIUM,
  ['parmesan']
);
order_2.addPizza(PIZZA_NAMES.MEAT, DOUGH_TYPE.THIN_DOUGH, PIZZA_SIZE.LARGE, [
  'shrimp'
]);

console.log(order_2.getMeals());
console.log(order_2.getFullPrice());

order_2.removeFromOrder(PIZZA_NAMES.MARGHERITA);

console.log(order_2.getMeals());
console.log(order_2.getFullPrice());

console.log(pizzeria);

pizzeria.removeOrder(1);

console.log(pizzeria);

console.log(pizzeria.getOrder(1));
