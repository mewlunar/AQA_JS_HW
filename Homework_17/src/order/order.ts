import { DOUGH_TYPE, IMeal, PIZZA_SIZE } from '../data/types';
import { PIZZA_NAMES } from '../data/receipts';
import { TOPPINGS } from '../data/prices';
import { Pizza } from '../meal/pizza';
import { ERROR_MESSAGES } from '../data/messages';

export class Order {
  public orderID: number;
  private meals: IMeal[] = [];

  constructor(orderID: number, meals: IMeal[]) {
    this.orderID = orderID;
    this.meals = meals;
  }

  public addPizza(
    name: PIZZA_NAMES,
    doughType: DOUGH_TYPE,
    size: PIZZA_SIZE,
    additionalToppings: (keyof typeof TOPPINGS)[] = []
  ) {
    const pizza = new Pizza(name, doughType, size, additionalToppings);
    this.meals.push(pizza);
    return pizza;
  }

  public getMeals() {
    return this.meals;
  }

  public getFullPrice() {
    return this.meals.reduce((total, meal) => total + meal.getPrice(), 0);
  }

  public removeFromOrder(name: PIZZA_NAMES): void {
    const mealIndex = this.meals.findIndex((el) => el.name === name);

    if (mealIndex === -1) {
      console.error(`${ERROR_MESSAGES.PIZZA_NAMES_NOT_FOND}: ${name}`);
      return;
    }

    this.meals.splice(mealIndex, 1);
  }
}
