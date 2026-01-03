import { expect } from 'chai';
import checkValidEmail from '../public/assets/check_valid_email.js';

describe('Функция для проверки валидности имейла', () => {
  it('Валидный имейл', () => {
    expect(checkValidEmail('example@example.com'))
      .to.equal(true);
  });

  it('Отсутствует символ @', () => {
    expect(checkValidEmail('example.com'))
      .to.equal(false);
  });

  it('Пустая часть домена перед точкой', () => {
    expect(checkValidEmail('example@.com'))
      .to.equal(false);
  });

  it('В локальной части имейла допустима точка', () => {
    expect(checkValidEmail('example.name@example.com'))
      .to.equal(true);
  });

  it('Домен без точки', () => {
    expect(checkValidEmail('example@com'))
      .to.equal(false);
  });

  it('Отсутствует доменная часть после @', () => {
    expect(checkValidEmail('example@'))
      .to.equal(false);
  });

  it('Строка без структуры email', () => {
    expect(checkValidEmail('example'))
      .to.equal(false);
  });

  it('Несколько символов @ в email', () => {
    expect(checkValidEmail('a@b@c.com'))
      .to.equal(false);
  });
});
