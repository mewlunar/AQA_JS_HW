import { Meal } from './meal';
import { pizzaReceipts, PIZZA_NAMES } from '../data/receipts';
import { DOUGH_TYPE, PIZZA_SIZE } from '../data/types';
import { TOPPINGS } from '../data/prices';

export class Pizza extends Meal {
  constructor(
    name: PIZZA_NAMES,
    private doughType: DOUGH_TYPE,
    private size: PIZZA_SIZE,
    private additionalToppings: (keyof typeof TOPPINGS)[] = []
  ) {
    const recipe = pizzaReceipts[name];
    const basePrice = recipe.prices.medium;

    super(name, basePrice);

    this.calculatePrice();
  }

  protected calculatePrice(): number {
    const additionalToppingsCost = this.additionalToppings.reduce(
      (total, topping) => total + (TOPPINGS[topping] || 0),
      0
    );

    return Math.ceil(
      this.basePrice * this.size * this.doughType + additionalToppingsCost
    );
  }
}
