// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим как минимум поле { id: number }.
// Класс должен служить для хранения объектов типа T в приватном массиве.

//     Подсказки:
// - Используйте ограничение типа: T extends { id: number }, чтобы убедиться, что T всегда имеет поле id.
// - Для метода add используйте утилитарный тип Omit<T, 'id'>, чтобы разрешить добавление объектов без поля id.
// - Для метода update используйте Partial<T> и добавьте ограничение, чтобы всегда было поле id.
//
//     Реализуйте в классе следующие методы:
//
//     - Конструктор должен принимать необязательный массив объектов типа T. Если массив передан, его элементы добавляются в хранилище.
//
// - Метод add принимает либо объект типа T, либо объект типа Omit<T, 'id'>.
//     Если объект без id, сгенерируйте уникальный id (например, с использованием счетчика или функции Date.now()).
// Подсказка: Используйте утилитарный тип Omit<T, 'id'> для указания типов объектов без поля id.
//
// - Метод update принимает объект с обязательным полем id и любым набором остальных ключей из T (используйте Partial<T>).
// Найдите объект с указанным id и обновите его соответствующими полями.
//
// - Метод remove принимает id и удаляет объект из массива.
//
// - Метод getById принимает id и возвращает объект с этим id, если найден, или undefined, если нет.
//
// - Метод getAll возвращает все объекты в хранилище.
//
//     Пример использования:
//Подсказка: используйте утилитарные типы Omit<T, 'id'> и Partial<T>

class ItemStorage<T extends { id: number }> {
  private items: T[] = [];

  constructor(...entities: T[]) {
    this.items.push(...entities);
  }

  private generateId(): number {
    return this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 1;
  }

  public add(item: T | Omit<T, "id">): void {
    const newItem = "id" in item ? item : { id: this.generateId(), ...item };
    this.items.push(newItem as T);
  }

  public update(item: Partial<T> & Pick<T, "id">) {
    const index = this.getIndexById(item.id);
    if (index === -1) throw new Error(`Id ${item.id} not found`);

    this.items[index] = { ...this.items[index], ...item };
  }

  public remove(id: number) {
    const index = this.getIndexById(id);
    if (index === -1) throw new Error(`Id ${id} not found`);
    this.items.splice(index, 1);
  }

  public getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  public getAll(): T[] {
    return this.items;
  }

  private getIndexById(id: number) {
    return this.items.findIndex((item) => item.id === id);
  }
}

type User = { id: number; name: string; age: number };

const storage = new ItemStorage<User>();

//Добавление объектов
storage.add({ id: 1, name: "Anatoly", age: 33 }); // Объект с id
storage.add({ name: "Elena", age: 25 }); // Объект без id, id сгенерируется автоматически
//Обновление объектов
storage.update({ id: 1, name: "Egor" }); // Обновление имени пользователя с id 1
storage.update({ id: 2, name: "Tatiana", age: 33 }); // Обновление имени и возраста пользователя с id 2
// // Получение объектов
console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]
//Удаление объектов
storage.remove(2);
//
console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]
