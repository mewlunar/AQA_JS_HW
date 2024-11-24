import { IMeal } from '../data/types';

export abstract class Meal implements IMeal {
  readonly name: string;
  basePrice: number;

  constructor(name: string, basePrice: number) {
    this.name = name;
    this.basePrice = basePrice;
  }

  protected abstract calculatePrice(): number;

  public getPrice(): number {
    return this.calculatePrice();
  }
}
