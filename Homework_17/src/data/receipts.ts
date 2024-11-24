import{PIZZA_NAMES, IPizzaReceipt} from './types';

export const pizzaReceipts: Record<PIZZA_NAMES, IPizzaReceipt> = {
  [PIZZA_NAMES.MARGHERITA]: {
    toppings: ['mozzarella', 'tomato'],
    prices: {
      medium: 779
    }
  },
  [PIZZA_NAMES.CARBONARA]: {
    toppings: [
      'bacon',
      'cheddar',
      'parmesan',
      'tomato',
      'mozzarella',
      'onions'
    ],
    prices: {
      medium: 989
    }
  },
  [PIZZA_NAMES.PEPPERONI]: {
    toppings: ['pepperoni', 'mozzarella', 'tomato'],
    prices: {
      medium: 789
    }
  },
  [PIZZA_NAMES.HAWAIIAN]: {
    toppings: ['chicken', 'mozzarella', 'pineapples'],
    prices: {
      medium: 809
    }
  },
  [PIZZA_NAMES.MEAT]: {
    toppings: ['chicken', 'beef', 'pepperoni', 'mozzarella'],
    prices: {
      medium: 889
    }
  },
  [PIZZA_NAMES.CHEESE]: {
    toppings: ['cheddar', 'parmesan ', 'mozzarella'],
    prices: {
      medium: 599
    }
  }
};
