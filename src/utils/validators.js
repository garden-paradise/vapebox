export const requiredValidator = (value) =>
  value ? undefined : 'Поле обязательно для дополнения';

export const emailValidator = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(email) && email
    ? undefined
    : 'Введите корректный E-mail';

export const phoneValidator = (number) => {
  if (!/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/.test(number))
    return true;
  return undefined;
};
