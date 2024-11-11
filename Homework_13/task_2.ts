// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true,
//     если пароль соответствует следующим правилам:
//     - Пароль должен содержать хотя бы одну заглавную букву.
// - Пароль должен содержать хотя бы одну букву в нижнем регистре.
// - Пароль должен содержать хотя бы одну цифру.
// - Пароль должен быть не менее 8 символов.
// - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
  if (password.length < 8 || password.trim() === "") {
    return false;
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasDigit = false;

  for (const char of password) {
    if (char >= "A" && char <= "Z") hasUpperCase = true;
    if (char >= "a" && char <= "z") hasLowerCase = true;
    if (char >= "0" && char <= "9") hasDigit = true;
  }

  return hasUpperCase && hasLowerCase && hasDigit;
}

console.log(validatePassword("123Behjsfhg"));
console.log(validatePassword("         "));
console.log(validatePassword("abcdefgh"));
console.log(validatePassword("ABCDEFGH"));
console.log(validatePassword("12345678"));
console.log(validatePassword("Abcdefg0"));
