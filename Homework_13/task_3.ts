// Создайте систему типов и интерфейсов для управления заказами в интернет-магазине.
//
//     Создайте интерфейсы для:
//
// - Product: товар с полями id (число), name (строка), price (число), и опциональным полем discount (число).
// - Customer: клиент с полями id (число), name (строка), и email (строка).
// - OrderItem: элемент заказа с полями product (тип Product), quantity (число).
// - Order: заказ с полями id (число), customer (тип Customer),
// items (массив типа OrderItem), и опциональным полем status (литерал типа 'pending' | 'shipped' | 'delivered').
//
// Напишите функцию calculateTotal, которая принимает объект типа Order
// и возвращает общую сумму заказа с учетом возможных скидок.
//
//     Если у товара есть скидка, то она должна учитываться при расчете суммы.
//     Сумма заказа вычисляется как сумма цен всех товаров, умноженная на количество каждого товара в заказе.
//

interface IProduct {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface OrderItem {
  product: IProduct;
  quantity: number;
}

interface Order {
  id: number;
  customer: Customer;
  items: OrderItem[];
  status?: "pending" | "shipped" | "delivered";
}

function calculateTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    const { price, discount = 0 } = item.product;
    const discountedPrice = price * (1 - discount / 100);
    return total + discountedPrice * item.quantity;
  }, 0);
}

// Пример использования:
const exampleOrder: Order = {
  id: 1,
  customer: {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  },
  items: [
    {
      product: { id: 1, name: "Laptop", price: 1000, discount: 10 },
      quantity: 2,
    },
    { product: { id: 2, name: "Mouse", price: 50 }, quantity: 1 },
  ],
  status: "pending",
};

console.log(calculateTotal(exampleOrder));
