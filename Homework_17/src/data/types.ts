export interface IMeal {
  readonly name: string;
  getPrice(): number;
}

export enum DOUGH_TYPE {
  CLASSIC_DOUGH = 1,
  THIN_DOUGH = 0.9
}

export enum PIZZA_SIZE {
  SMALL = 0.7,
  MEDIUM = 1,
  LARGE = 1.5
}
