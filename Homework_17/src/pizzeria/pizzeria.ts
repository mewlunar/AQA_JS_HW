import { Order } from '../order/order';
import { IMeal } from '../data/types';
import { ERROR_MESSAGES } from '../data/messages';

export class Pizzeria {
  ordersArray: Order[] = [];
  private lastOrderId: number = 0;

  constructor(
    public name: string,
    public address: string,
    public workingHours: string
  ) {}

  public createOrder(orderDetails: IMeal[]): Order {
    const orderNumber = this.setNextOrderId();
    const newOrder = new Order(orderNumber, orderDetails);
    this.ordersArray.push(newOrder);
    return newOrder;
  }

  public getOrder(orderNumber: number): Order | null {
    return (
      this.ordersArray.find((order) => order.orderID === orderNumber) || null
    );
  }

  public removeOrder(orderNumber: number) {
    const orderIndex = this.ordersArray.findIndex(
      (el) => el.orderID === orderNumber
    );

    if (orderIndex === -1) {
      console.error(`${ERROR_MESSAGES.ORDER_NOT_FOUND}: ${orderNumber}`);
      return;
    }
    this.ordersArray.splice(orderIndex, 1);
  }

  private setNextOrderId(): number {
    return ++this.lastOrderId;
  }
}
