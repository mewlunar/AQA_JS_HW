// Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы.
//     Затипизировать надо саму функцию и коллбэк.
//     Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив,
//     где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
// Пример:
//     map([1,2,3,4,5], callback) => [0,2,6,12,20]
type MapCallBack<T, U> = (value: T, index: number, array: T[]) => U;

function customMap<T, U>(
  array: T[],
  callbackFunc: MapCallBack<T,U>,
): U[] {
  const result: U[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callbackFunc(array[i], i, array));
  }

  return result;
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7];

const callback: MapCallBack<number, number> = (value,index) =>value*index
console.log(customMap(arr, (element, index) => element * index));
