/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i], i, array);
  }

  return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let i = initial ? 0 : 1;
  let accumulator = initial ? initial : array[0];

  for (i; i < array.length; i++) {
    accumulator = fn(accumulator, array[i], i, array);
  }

  return accumulator;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let nameArray = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      nameArray.push(key.toUpperCase());
    }
  }

  return nameArray;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
*/
function slice(array, from = 0, to = array.length) {
  let cutArr = [];
  let end = to > array.length ? array.length : to;
  let start = from;

  if (from < 0) {
    start = (-from > array.length) ? 0 : array.length + from;
  }

  switch (from) {
    case from === to:
      break;
    case from > array.length:
      break;
    default:
      if (to >= 0) {
        for (let i = start; i < end; i++ ) {
          cutArr.push(array[i]);
        }
      } else {
        for (let i = start; i < end + array.length; i++ ) {
          cutArr.push(array[i]);
        }
      }
  }

  return cutArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  let proxy = new Proxy(obj, {

    set(target, prop, value) {
      target[prop] = value * value;

      return true;
    }
  });

  return proxy;
}

export {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy
};
