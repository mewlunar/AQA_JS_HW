export enum PIZZA_NAMES {
  MARGHERITA = 'Margherita',
  CARBONARA = 'Carbonara',
  PEPPERONI = 'Pepperoni',
  HAWAIIAN = 'Hawaiian',
  MEAT = 'Meat',
  CHEESE = 'Cheese'
}

export const pizzaReceipts = {
  Margherita: {
    toppings: ['mozzarella', 'tomato'],
    prices: {
      medium: 779
    }
  },
  Carbonara: {
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
  Pepperoni: {
    toppings: ['pepperoni', 'mozzarella', 'tomato'],
    prices: {
      medium: 789
    }
  },
  Hawaiian: {
    toppings: ['chicken', 'mozzarella', 'pineapples'],
    prices: {
      medium: 809
    }
  },
  Meat: {
    toppings: ['chicken', 'beef', 'pepperoni', 'mozzarella'],
    prices: {
      medium: 889
    }
  },
  Cheese: {
    toppings: ['cheddar', 'parmesan ', 'mozzarella'],
    prices: {
      medium: 599
    }
  }
};
